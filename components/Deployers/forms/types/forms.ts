import { AbiTypeToPrimitiveType } from 'abitype';
import { EthereumAddress } from '../utils/ReadForm';

export interface DeployConfigHSG_BigInt {
  _ownerHatId: AbiTypeToPrimitiveType<'uint256'>;
  _signerHatId: AbiTypeToPrimitiveType<'uint256'>;
  _minThreshold: AbiTypeToPrimitiveType<'uint256'>;
  _targetThreshold: AbiTypeToPrimitiveType<'uint256'>;
  _maxSigners: AbiTypeToPrimitiveType<'uint256'>;
}

// used to allow the FE to have strings, this is converted
export interface DeployConfigHSG_String {
  _ownerHatId: string;
  _signerHatId: string;
  _minThreshold: string;
  _targetThreshold: string;
  _maxSigners: string;
}
export interface DeployConfigMHSG_String {
  _ownerHatId: string;
  _signersHatIds: string[];
  _safe: string;
  _minThreshold: string;
  _targetThreshold: string;
  _maxSigners: string;
}
