export interface BNLike {
  words: number[];

  clone(): any;

  [name: string]: any;
}

export interface BNLikeCtor {
  new(num: number, endian?: string);

  new(num: number, base?: number, endian?: string);

  new(num: number, base?: number | string, endian?: string);

  [name: string]: any;
}

export interface BigNumObject {
  hi: number;
  lo: number;
}

export interface ArrayLikeCtor {
  new(size: number);

  allocUnsafe?(size: number): ArrayLike<number>;
}

export class N64 {
  hi: number;
  lo: number;
  sign: number;

  constructor(sign: number);

  abs(): this;

  add(b: N64): this;

  addn(num: number): this;

  and(b: N64): this;

  andln(num: number): this;

  andn(num: number): this;

  bitLength(): number;

  byteLength(): number;

  clone(): this;

  cmp(b: N64): number;

  cmpn(num: number): number;

  div(b: N64): this;

  divn(num: number): this;

  eq(b: N64): this;

  eqn(num: number): this;

  from(num: number | string | boolean | BNLike | ArrayLike<number> | BigNumObject | null, base?: number | string): this;

  fromBE(data: ArrayLike<number>): this;

  fromBN(num: BNLike): this;

  fromBits(hi: number, lo: number): this;

  fromBool(value: boolean): this;

  fromInt(num: number): this;

  fromJSON(json: string): this;

  fromLE(data: ArrayLike<number>): this;

  fromNumber(num: number): this;

  fromObject(num: BigNumObject): this;

  fromRaw(data: ArrayLike<number>): any;

  fromString(str: string, base?: number | string): any;

  getb(pos: number): number;

  gt(b: N64): boolean;

  gte(b: N64): boolean;

  gten(num: number): boolean;

  gtn(num: number): boolean;

  /**
   * In-place abs
   */
  iabs(): this;

  iadd(b: N64): this;

  iaddn(num: number): this;

  iand(b: N64): this;

  iandn(num: number): this;

  idiv(b: N64): this;

  idivn(num: number): this;

  imaskn(bit: number): this;

  imod(b: N64): this;

  imodn(num: number): this;

  imul(b: N64): this;

  imuln(num: number): this;

  ineg(): this;

  inject(b: N64): this;

  inot(): this;

  inspect(): string;

  ior(b: N64): this;

  iorn(num: number): this;

  ipow(b: N64): this;

  ipown(num: number): this;

  isEven(): boolean;

  isNeg(): boolean;

  isOdd(): boolean;

  isSafe(): boolean;

  isZero(): boolean;

  ishl(b: N64): this;

  ishln(bits: number): this;

  ishr(b: N64): this;

  ishrn(bits: number): this;

  isqr(): this;

  isub(b: N64): this;

  isubn(num: number): this;

  iushr(b: N64): this;

  iushrn(bits: number): this;

  ixor(b: N64): this;

  ixorn(num: number): this;

  join(hi: number, lo: number): this;

  lt(b: N64): boolean;

  lte(b: N64): boolean;

  lten(num: number): boolean;

  ltn(num: number): boolean;

  maskn(bit: number): this;

  mod(b: N64): this;

  modn(num: number): this;

  mul(b: N64): this;

  muln(num: number): this;

  neg(): this;

  not(): this;

  or(b: N64): this;

  orb(pos: number, ch: number): this;

  orn(num: number): this;

  pow(b: N64): this;

  pown(num: number): this;

  readBE(data: ArrayLike<number>, off: number): this;

  readLE(data: ArrayLike<number>, off: number): this;

  readRaw(data: ArrayLike<number>, off: number): this;

  set(num: number): this;

  setb(pos: number, ch: number): this;

  setn(bit: number, val: number): any;

  shl(b: N64): this;

  shln(bits: number): this;

  shr(b: N64): this;

  shrn(bits: number): this;

  sqr(): this;

  sub(b: N64): this;

  subn(num: number): this;

  testn(bit: number): this;

  toBE(ArrayLike: ArrayLikeCtor): ArrayLike<number>;

  toBN(BN: BNLikeCtor): BNLike;

  toBits(): [number, number];

  toBool(): boolean;

  toDouble(): number;

  toI64(): I64;

  toInt(): number;

  toJSON(): string;

  toLE(ArrayLike: ArrayLikeCtor): ArrayLike<number>;

  toNumber(): number;

  toObject(): BigNumObject;

  toRaw(ArrayLike: ArrayLikeCtor): ArrayLike<number>;

  toString(base?: number | string, pad?: number): any;

  toU64(): U64;

  ushr(b: N64): this;

  ushrn(bits: number): this;

  writeBE(data: ArrayLike<number>, off: number): number;

  writeLE(data: ArrayLike<number>, off: number): number;

  writeRaw(data: ArrayLike<number>, off: number): number;

  xor(b: N64): this;

  xorn(num: number): this;

  static from(num: number | string | boolean | BNLike | ArrayLike<number> | BigNumObject | null, base?: number | string): this;

  static fromBE(data: ArrayLike<number>): this;

  static fromBN(num: BNLike): this;

  static fromBits(hi: number, lo: number): this;

  static fromBool(value: boolean): this;

  static fromInt(num: number): this;

  static fromJSON(json: string): this;

  static fromLE(data: ArrayLike<number>): this;

  static fromNumber(num: number): this;

  static fromObject(obj: BigNumObject): this;

  static fromRaw(data: ArrayLike<number>): this;

  static fromString(str: string, base?: number | string): this;

  static isI64(obj: any): boolean;

  static isN64(obj: any): boolean;

  static isU64(obj: any): boolean;

  static max(a: N64, b: N64): N64;

  static min(a: N64, b: N64): N64;

  static pow(num: number, exp: number): this;

  static random(): this;

  static readBE(data: ArrayLike<number>, off: number): this;

  static readLE(data: ArrayLike<number>, off: number): this;

  static readRaw(data: ArrayLike<number>, off: number): this;

  static shift(num: number, bits: number): this;

}

export class I64 extends N64 {
  constructor(num: number | string | boolean | BNLike | ArrayLike<number> | BigNumObject | null, base?: number | string);

  static LONG_MIN: Number;
  static LONG_MAX: Number;

  static INT32_MIN: U64;
  static INT32_MAX: U64;

  static INT64_MIN: U64;
  static INT64_MAX: U64;
}

export class U64 extends N64 {
  constructor(num: number | string | boolean | BNLike | ArrayLike<number> | BigNumObject | null, base?: number | string);

  static ULONG_MIN: Number;
  static ULONG_MAX: Number;

  static UINT32_MIN: U64;
  static UINT32_MAX: U64;

  static UINT64_MIN: U64;
  static UINT64_MAX: U64;
}
