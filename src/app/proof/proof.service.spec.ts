import { TestBed, async } from '@angular/core/testing';
import { ProofService } from './proof.service';
import mockProof from './mock-proof';

describe('ProofService', () => {
  let service: ProofService;

  beforeEach(() => {
    service = new ProofService();
    service.setProof(mockProof);
  });

  it('should get proof', () => {
    expect(service.getProof()).toBe(mockProof);
  });

  it('should get proof by tag', () => {
    const tags = ['angular'];
    expect(service.getProofByTag(tags)).toEqual([mockProof[0]]);
  });

  it('should put new proof', () => {
    const newProof = { name: 'Test proof' };
    service.putProof(newProof);
    expect(service.getProof().indexOf(newProof)).not.toBe(-1);
  });

  it('should delete proof', () => {
    const deleted = mockProof[1];
    service.deleteProof(deleted);
    expect(service.getProof().indexOf(deleted)).toBe(-1);
  });
});
