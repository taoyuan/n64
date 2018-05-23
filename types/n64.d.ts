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

  static isI64(obj: any): boolean;

  static isN64(obj: any): boolean;

  static isU64(obj: any): boolean;

  static max<T extends N64, K extends N64>(a: T, b: K): T | K;

  static min<T extends N64, K extends N64>(a: T, b: K): T | K;

  static from<T extends N64>(num: number | string | boolean | BNLike | ArrayLike<number> | BigNumObject | null, base?: number | string): T;

  static fromBE<T extends N64>(data: ArrayLike<number>): T;

  static fromBN<T extends N64>(num: BNLike): T;

  static fromBits<T extends N64>(hi: number, lo: number): T;

  static fromBool<T extends N64>(value: boolean): T;

  static fromInt<T extends N64>(num: number): T;

  static fromJSON<T extends N64>(json: string): T;

  static fromLE<T extends N64>(data: ArrayLike<number>): T;

  static fromNumber<T extends N64>(num: number): T;

  static fromObject<T extends N64>(obj: BigNumObject): T;

  static fromRaw<T extends N64>(data: ArrayLike<number>): T;

  static fromString<T extends N64>(str: string, base?: number | string): T;

  static pow<T extends N64>(num: number, exp: number): T;

  static random<T extends N64>(): T;

  static readBE<T extends N64>(data: ArrayLike<number>, off: number): T;

  static readLE<T extends N64>(data: ArrayLike<number>, off: number): T;

  static readRaw<T extends N64>(data: ArrayLike<number>, off: number): T;

  static shift<T extends N64>(num: number, bits: number): T;
}

export class I64 extends N64 {
  constructor(num: number | string | boolean | BNLike | ArrayLike<number> | BigNumObject | null, base?: number | string);

  static LONG_MIN: Number;
  static LONG_MAX: Number;

  static INT32_MIN: U64;
  static INT32_MAX: U64;

  static INT64_MIN: U64;
  static INT64_MAX: U64;

  static from<I64>(num: number | string | boolean | BNLike | ArrayLike<number> | BigNumObject | null, base?: number | string): I64;

  static fromBE<I64>(data: ArrayLike<number>): I64;

  static fromBN<I64>(num: BNLike): I64;

  static fromBits<I64>(hi: number, lo: number): I64;

  static fromBool<I64>(value: boolean): I64;

  static fromInt<I64>(num: number): I64;

  static fromJSON<I64>(json: string): I64;

  static fromLE<I64>(data: ArrayLike<number>): I64;

  static fromNumber<I64>(num: number): I64;

  static fromObject<I64>(obj: BigNumObject): I64;

  static fromRaw<I64>(data: ArrayLike<number>): I64;

  static fromString<I64>(str: string, base?: number | string): I64;

  static pow<I64>(num: number, exp: number): I64;

  static random<I64>(): I64;

  static readBE<I64>(data: ArrayLike<number>, off: number): I64;

  static readLE<I64>(data: ArrayLike<number>, off: number): I64;

  static readRaw<I64>(data: ArrayLike<number>, off: number): I64;

  static shift<I64>(num: number, bits: number): I64;
}

export class U64 extends N64 {
  constructor(num: number | string | boolean | BNLike | ArrayLike<number> | BigNumObject | null, base?: number | string);

  static ULONG_MIN: Number;
  static ULONG_MAX: Number;

  static UINT32_MIN: U64;
  static UINT32_MAX: U64;

  static UINT64_MIN: U64;
  static UINT64_MAX: U64;

  static from<U64>(num: number | string | boolean | BNLike | ArrayLike<number> | BigNumObject | null, base?: number | string): U64;

  static fromBE<U64>(data: ArrayLike<number>): U64;

  static fromBN<U64>(num: BNLike): U64;

  static fromBits<U64>(hi: number, lo: number): U64;

  static fromBool<U64>(value: boolean): U64;

  static fromInt<U64>(num: number): U64;

  static fromJSON<U64>(json: string): U64;

  static fromLE<U64>(data: ArrayLike<number>): U64;

  static fromNumber<U64>(num: number): U64;

  static fromObject<U64>(obj: BigNumObject): U64;

  static fromRaw<U64>(data: ArrayLike<number>): U64;

  static fromString<U64>(str: string, base?: number | string): U64;

  static pow<U64>(num: number, exp: number): U64;

  static random<U64>(): U64;

  static readBE<U64>(data: ArrayLike<number>, off: number): U64;

  static readLE<U64>(data: ArrayLike<number>, off: number): U64;

  static readRaw<U64>(data: ArrayLike<number>, off: number): U64;

  static shift<U64>(num: number, bits: number): U64;
}
