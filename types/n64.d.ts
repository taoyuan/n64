export class N64 {
  hi: number;
  lo: number;
  sign: number;

  constructor(sign: any);

  abs(): any;

  add(b: any): any;

  addn(num: any): any;

  and(b: any): any;

  andln(num: any): any;

  andn(num: any): any;

  bitLength(): any;

  byteLength(): any;

  clone(): any;

  cmp(b: any): any;

  cmpn(num: any): any;

  div(b: any): any;

  divn(num: any): any;

  eq(b: any): any;

  eqn(num: any): any;

  from(num: any, base: any): any;

  fromBE(data: any): any;

  fromBN(num: any): any;

  fromBits(hi: any, lo: any): any;

  fromBool(value: any): any;

  fromInt(num: any): any;

  fromJSON(json: any): any;

  fromLE(data: any): any;

  fromNumber(num: any): any;

  fromObject(num: any): any;

  fromRaw(data: any): any;

  fromString(str: any, base: any): any;

  getb(pos: any): any;

  gt(b: any): any;

  gte(b: any): any;

  gten(num: any): any;

  gtn(num: any): any;

  iabs(): any;

  iadd(b: any): any;

  iaddn(num: any): any;

  iand(b: any): any;

  iandn(num: any): any;

  idiv(b: any): any;

  idivn(num: any): any;

  imaskn(bit: any): any;

  imod(b: any): any;

  imodn(num: any): any;

  imul(b: any): any;

  imuln(num: any): any;

  ineg(): any;

  inject(b: any): any;

  inot(): any;

  inspect(): any;

  ior(b: any): any;

  iorn(num: any): any;

  ipow(b: any): any;

  ipown(num: any): any;

  isEven(): any;

  isNeg(): any;

  isOdd(): any;

  isSafe(): any;

  isZero(): any;

  ishl(b: any): any;

  ishln(bits: any): any;

  ishr(b: any): any;

  ishrn(bits: any): any;

  isqr(): any;

  isub(b: any): any;

  isubn(num: any): any;

  iushr(b: any): any;

  iushrn(bits: any): any;

  ixor(b: any): any;

  ixorn(num: any): any;

  join(hi: any, lo: any): any;

  lt(b: any): any;

  lte(b: any): any;

  lten(num: any): any;

  ltn(num: any): any;

  maskn(bit: any): any;

  mod(b: any): any;

  modn(num: any): any;

  mul(b: any): any;

  muln(num: any): any;

  neg(): any;

  not(): any;

  or(b: any): any;

  orb(pos: any, ch: any): any;

  orn(num: any): any;

  pow(b: any): any;

  pown(num: any): any;

  readBE(data: any, off: any): any;

  readLE(data: any, off: any): any;

  readRaw(data: any, off: any): any;

  set(num: any): any;

  setb(pos: any, ch: any): any;

  setn(bit: any, val: any): any;

  shl(b: any): any;

  shln(bits: any): any;

  shr(b: any): any;

  shrn(bits: any): any;

  sqr(): any;

  sub(b: any): any;

  subn(num: any): any;

  testn(bit: any): any;

  toBE(ArrayLike: any): any;

  toBN(BN: any): any;

  toBits(): any;

  toBool(): any;

  toDouble(): any;

  toI64(): any;

  toInt(): any;

  toJSON(): any;

  toLE(ArrayLike: any): any;

  toNumber(): any;

  toObject(): any;

  toRaw(ArrayLike: any): any;

  toString(base: any, pad: any): any;

  toU64(): any;

  ushr(b: any): any;

  ushrn(bits: any): any;

  writeBE(data: any, off: any): any;

  writeLE(data: any, off: any): any;

  writeRaw(data: any, off: any): any;

  xor(b: any): any;

  xorn(num: any): any;

  static from(num: any, base: any): any;

  static fromBE(data: any): any;

  static fromBN(num: any): any;

  static fromBits(hi: any, lo: any): any;

  static fromBool(value: any): any;

  static fromInt(num: any): any;

  static fromJSON(json: any): any;

  static fromLE(data: any): any;

  static fromNumber(num: any): any;

  static fromObject(obj: any): any;

  static fromRaw(data: any): any;

  static fromString(str: any, base: any): any;

  static isI64(obj: any): any;

  static isN64(obj: any): any;

  static isU64(obj: any): any;

  static max(a: any, b: any): any;

  static min(a: any, b: any): any;

  static pow(num: any, exp: any): any;

  static random(): any;

  static readBE(data: any, off: any): any;

  static readLE(data: any, off: any): any;

  static readRaw(data: any, off: any): any;

  static shift(num: any, bits: any): any;

}

export class I64 extends N64 {
  constructor(num?: any, base?: any);

  static LONG_MIN: Number;
  static LONG_MAX: Number;

  static INT32_MIN: U64;
  static INT32_MAX: U64;

  static INT64_MIN: U64;
  static INT64_MAX: U64;
}

export class U64 extends N64 {
  constructor(num?: any, base?: any);

  static ULONG_MIN: Number;
  static ULONG_MAX: Number;

  static UINT32_MIN: U64;
  static UINT32_MAX: U64;

  static UINT64_MIN: U64;
  static UINT64_MAX: U64;
}
