import { Injectable } from '@angular/core';
import mockProof from './mock-proof';
import PouchDB from 'pouchdb';
// import PouchDB from 'pouchdb-browser';
// const PouchDB = require('pouchdb');

@Injectable()
export class ProofService {
  private proof;
  public db: any = new PouchDB('http://localhost:5984/preuves-d-apprentissage');

  public constructor() {
    this.proof = mockProof; // TODO get proof from DB
  }

  public getProof() {
    this.db.allDocs({
      include_docs: true,
      attachments: true,
    }).then(function (result) {
      // handle result
      console.log('res' + JSON.stringify(result));
    }).catch(function (err) {
      console.log(err);
    });
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
    this.db.post(newProof).then((response) => {
      // handle response
      console.log('res' + JSON.stringify(response));
    }).catch((err) => {
      console.log(err);
    });
  }

  public deleteProof(proof: any) {
    const index = this.proof.indexOf(proof);
    if (index !== -1) {
      this.proof.splice(index, 1);
      // TODO delete proof from DB
    }
  }

  // this function is used for unit test
  public setProof(proofArr: any) {
    this.proof = proofArr;
  }
}
