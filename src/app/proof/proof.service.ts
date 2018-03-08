import { Injectable } from '@angular/core';
import mockProof from './mock-proof';
import PouchDB from 'pouchdb';
// import PouchDB from 'pouchdb-browser';
// const PouchDB = require('pouchdb');

@Injectable()
export class ProofService {
  private proof: any = [];
  public db: any = new PouchDB('http://localhost:5984/preuves-d-apprentissage');

  public constructor() {
    // Get all proofs from DB
    this.db.allDocs({
      include_docs: true,
      attachments: true
    }, (err, response) => {
      if (err) { return console.log(err); }
      response.rows.map((ele) => {
        this.proof.push(ele.doc);
      });
    });
  }

  public getProof(): any[] {
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
    // Insert newProof to DB
    this.db.post(newProof, (e, response) => {
      if (e) { return console.log(e); }
      console.log(response);
      this.db.get(response.id, (err, doc) => {
        if (e) { return console.log(err); }
        this.proof.push(doc);
      });
    });
  }

  public deleteProof(proof: any) {
    const index = this.proof.indexOf(proof);
    if (index !== -1) {
      this.proof.splice(index, 1);
      // Delete proof from DB
      this.db.get(proof._id, (e, doc) => {
        if (e) { return console.log(e); }
        this.db.remove(doc, (err, response) => {
          if (err) { return console.log(err); }
          console.log(response);
        });
      });
    }
  }

  // this function is used for unit test
  public setProof(proofArr: any) {
    this.proof = proofArr;
  }
}
