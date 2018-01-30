import { Injectable } from '@angular/core';
import mockProof from './mock-proof';

@Injectable()
export class ProofService {
  private proof;

  public constructor() {
    this.proof = mockProof; // TODO get proof from DB
  }

  public getProof() {
    return this.proof;
  }

  public getProofByTag(searchedTags: string[]) {
    const searchedProof = [];
    this.proof.map((ele) => {
      if (searchedTags.every((e) => ele.tags.indexOf(e) !== -1)) {
        searchedProof.push(ele);
      }
    });
    return searchedProof;
  }

  public putProof(newProof: any) {
    this.proof.push(newProof);
    // TODO insert newProof to DB
  }
}
