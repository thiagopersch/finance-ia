
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model transaction
 * 
 */
export type transaction = $Result.DefaultSelection<Prisma.$transactionPayload>
/**
 * Model transaction_category
 * 
 */
export type transaction_category = $Result.DefaultSelection<Prisma.$transaction_categoryPayload>
/**
 * Model transaction_payment_method
 * 
 */
export type transaction_payment_method = $Result.DefaultSelection<Prisma.$transaction_payment_methodPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TransactionType: {
  DEPOSIT: 'DEPOSIT',
  EXPENSE: 'EXPENSE',
  INVESTIMENT: 'INVESTIMENT'
};

export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType]

}

export type TransactionType = $Enums.TransactionType

export const TransactionType: typeof $Enums.TransactionType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.transactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction_category`: Exposes CRUD operations for the **transaction_category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transaction_categories
    * const transaction_categories = await prisma.transaction_category.findMany()
    * ```
    */
  get transaction_category(): Prisma.transaction_categoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction_payment_method`: Exposes CRUD operations for the **transaction_payment_method** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transaction_payment_methods
    * const transaction_payment_methods = await prisma.transaction_payment_method.findMany()
    * ```
    */
  get transaction_payment_method(): Prisma.transaction_payment_methodDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    transaction: 'transaction',
    transaction_category: 'transaction_category',
    transaction_payment_method: 'transaction_payment_method'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "transaction" | "transaction_category" | "transaction_payment_method"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      transaction: {
        payload: Prisma.$transactionPayload<ExtArgs>
        fields: Prisma.transactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.transactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.transactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          findFirst: {
            args: Prisma.transactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.transactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          findMany: {
            args: Prisma.transactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>[]
          }
          create: {
            args: Prisma.transactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          createMany: {
            args: Prisma.transactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.transactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>[]
          }
          delete: {
            args: Prisma.transactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          update: {
            args: Prisma.transactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          deleteMany: {
            args: Prisma.transactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.transactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.transactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>[]
          }
          upsert: {
            args: Prisma.transactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.transactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.transactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      transaction_category: {
        payload: Prisma.$transaction_categoryPayload<ExtArgs>
        fields: Prisma.transaction_categoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.transaction_categoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_categoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.transaction_categoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_categoryPayload>
          }
          findFirst: {
            args: Prisma.transaction_categoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_categoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.transaction_categoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_categoryPayload>
          }
          findMany: {
            args: Prisma.transaction_categoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_categoryPayload>[]
          }
          create: {
            args: Prisma.transaction_categoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_categoryPayload>
          }
          createMany: {
            args: Prisma.transaction_categoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.transaction_categoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_categoryPayload>[]
          }
          delete: {
            args: Prisma.transaction_categoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_categoryPayload>
          }
          update: {
            args: Prisma.transaction_categoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_categoryPayload>
          }
          deleteMany: {
            args: Prisma.transaction_categoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.transaction_categoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.transaction_categoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_categoryPayload>[]
          }
          upsert: {
            args: Prisma.transaction_categoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_categoryPayload>
          }
          aggregate: {
            args: Prisma.Transaction_categoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction_category>
          }
          groupBy: {
            args: Prisma.transaction_categoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<Transaction_categoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.transaction_categoryCountArgs<ExtArgs>
            result: $Utils.Optional<Transaction_categoryCountAggregateOutputType> | number
          }
        }
      }
      transaction_payment_method: {
        payload: Prisma.$transaction_payment_methodPayload<ExtArgs>
        fields: Prisma.transaction_payment_methodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.transaction_payment_methodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_payment_methodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.transaction_payment_methodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_payment_methodPayload>
          }
          findFirst: {
            args: Prisma.transaction_payment_methodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_payment_methodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.transaction_payment_methodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_payment_methodPayload>
          }
          findMany: {
            args: Prisma.transaction_payment_methodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_payment_methodPayload>[]
          }
          create: {
            args: Prisma.transaction_payment_methodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_payment_methodPayload>
          }
          createMany: {
            args: Prisma.transaction_payment_methodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.transaction_payment_methodCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_payment_methodPayload>[]
          }
          delete: {
            args: Prisma.transaction_payment_methodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_payment_methodPayload>
          }
          update: {
            args: Prisma.transaction_payment_methodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_payment_methodPayload>
          }
          deleteMany: {
            args: Prisma.transaction_payment_methodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.transaction_payment_methodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.transaction_payment_methodUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_payment_methodPayload>[]
          }
          upsert: {
            args: Prisma.transaction_payment_methodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaction_payment_methodPayload>
          }
          aggregate: {
            args: Prisma.Transaction_payment_methodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction_payment_method>
          }
          groupBy: {
            args: Prisma.transaction_payment_methodGroupByArgs<ExtArgs>
            result: $Utils.Optional<Transaction_payment_methodGroupByOutputType>[]
          }
          count: {
            args: Prisma.transaction_payment_methodCountArgs<ExtArgs>
            result: $Utils.Optional<Transaction_payment_methodCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    transaction?: transactionOmit
    transaction_category?: transaction_categoryOmit
    transaction_payment_method?: transaction_payment_methodOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Transaction_categoryCountOutputType
   */

  export type Transaction_categoryCountOutputType = {
    transaction: number
  }

  export type Transaction_categoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | Transaction_categoryCountOutputTypeCountTransactionArgs
  }

  // Custom InputTypes
  /**
   * Transaction_categoryCountOutputType without action
   */
  export type Transaction_categoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction_categoryCountOutputType
     */
    select?: Transaction_categoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Transaction_categoryCountOutputType without action
   */
  export type Transaction_categoryCountOutputTypeCountTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionWhereInput
  }


  /**
   * Count Type Transaction_payment_methodCountOutputType
   */

  export type Transaction_payment_methodCountOutputType = {
    transaction: number
  }

  export type Transaction_payment_methodCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | Transaction_payment_methodCountOutputTypeCountTransactionArgs
  }

  // Custom InputTypes
  /**
   * Transaction_payment_methodCountOutputType without action
   */
  export type Transaction_payment_methodCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction_payment_methodCountOutputType
     */
    select?: Transaction_payment_methodCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Transaction_payment_methodCountOutputType without action
   */
  export type Transaction_payment_methodCountOutputTypeCountTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    change_passowrd: boolean | null
    status: boolean | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    change_passowrd: boolean | null
    status: boolean | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    change_passowrd: number
    status: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    change_passowrd?: true
    status?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    change_passowrd?: true
    status?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    change_passowrd?: true
    status?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string
    password: string
    change_passowrd: boolean
    status: boolean
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    change_passowrd?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    change_passowrd?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    change_passowrd?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    change_passowrd?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "change_passowrd" | "status" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      password: string
      change_passowrd: boolean
      status: boolean
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly change_passowrd: FieldRef<"User", 'Boolean'>
    readonly status: FieldRef<"User", 'Boolean'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
    readonly deleted_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type TransactionSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type TransactionMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.TransactionType | null
    amount: Decimal | null
    date: Date | null
    category_id: string | null
    payment_method_id: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.TransactionType | null
    amount: Decimal | null
    date: Date | null
    category_id: string | null
    payment_method_id: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    name: number
    type: number
    amount: number
    date: number
    category_id: number
    payment_method_id: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    amount?: true
  }

  export type TransactionSumAggregateInputType = {
    amount?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    amount?: true
    date?: true
    category_id?: true
    payment_method_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    amount?: true
    date?: true
    category_id?: true
    payment_method_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    amount?: true
    date?: true
    category_id?: true
    payment_method_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transaction to aggregate.
     */
    where?: transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type transactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionWhereInput
    orderBy?: transactionOrderByWithAggregationInput | transactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: transactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: string
    name: string
    type: $Enums.TransactionType
    amount: Decimal
    date: Date
    category_id: string
    payment_method_id: string
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends transactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type transactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    amount?: boolean
    date?: boolean
    category_id?: boolean
    payment_method_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    transaction_category?: boolean | transaction_categoryDefaultArgs<ExtArgs>
    payment_method?: boolean | transaction_payment_methodDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type transactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    amount?: boolean
    date?: boolean
    category_id?: boolean
    payment_method_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    transaction_category?: boolean | transaction_categoryDefaultArgs<ExtArgs>
    payment_method?: boolean | transaction_payment_methodDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type transactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    amount?: boolean
    date?: boolean
    category_id?: boolean
    payment_method_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    transaction_category?: boolean | transaction_categoryDefaultArgs<ExtArgs>
    payment_method?: boolean | transaction_payment_methodDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type transactionSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    amount?: boolean
    date?: boolean
    category_id?: boolean
    payment_method_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type transactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "amount" | "date" | "category_id" | "payment_method_id" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["transaction"]>
  export type transactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction_category?: boolean | transaction_categoryDefaultArgs<ExtArgs>
    payment_method?: boolean | transaction_payment_methodDefaultArgs<ExtArgs>
  }
  export type transactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction_category?: boolean | transaction_categoryDefaultArgs<ExtArgs>
    payment_method?: boolean | transaction_payment_methodDefaultArgs<ExtArgs>
  }
  export type transactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction_category?: boolean | transaction_categoryDefaultArgs<ExtArgs>
    payment_method?: boolean | transaction_payment_methodDefaultArgs<ExtArgs>
  }

  export type $transactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "transaction"
    objects: {
      transaction_category: Prisma.$transaction_categoryPayload<ExtArgs>
      payment_method: Prisma.$transaction_payment_methodPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: $Enums.TransactionType
      amount: Prisma.Decimal
      date: Date
      category_id: string
      payment_method_id: string
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type transactionGetPayload<S extends boolean | null | undefined | transactionDefaultArgs> = $Result.GetResult<Prisma.$transactionPayload, S>

  type transactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<transactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface transactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['transaction'], meta: { name: 'transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {transactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends transactionFindUniqueArgs>(args: SelectSubset<T, transactionFindUniqueArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {transactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends transactionFindUniqueOrThrowArgs>(args: SelectSubset<T, transactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends transactionFindFirstArgs>(args?: SelectSubset<T, transactionFindFirstArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends transactionFindFirstOrThrowArgs>(args?: SelectSubset<T, transactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends transactionFindManyArgs>(args?: SelectSubset<T, transactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {transactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends transactionCreateArgs>(args: SelectSubset<T, transactionCreateArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {transactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends transactionCreateManyArgs>(args?: SelectSubset<T, transactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {transactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends transactionCreateManyAndReturnArgs>(args?: SelectSubset<T, transactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {transactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends transactionDeleteArgs>(args: SelectSubset<T, transactionDeleteArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {transactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends transactionUpdateArgs>(args: SelectSubset<T, transactionUpdateArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {transactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends transactionDeleteManyArgs>(args?: SelectSubset<T, transactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends transactionUpdateManyArgs>(args: SelectSubset<T, transactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {transactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends transactionUpdateManyAndReturnArgs>(args: SelectSubset<T, transactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {transactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends transactionUpsertArgs>(args: SelectSubset<T, transactionUpsertArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends transactionCountArgs>(
      args?: Subset<T, transactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends transactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: transactionGroupByArgs['orderBy'] }
        : { orderBy?: transactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, transactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the transaction model
   */
  readonly fields: transactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__transactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transaction_category<T extends transaction_categoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, transaction_categoryDefaultArgs<ExtArgs>>): Prisma__transaction_categoryClient<$Result.GetResult<Prisma.$transaction_categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payment_method<T extends transaction_payment_methodDefaultArgs<ExtArgs> = {}>(args?: Subset<T, transaction_payment_methodDefaultArgs<ExtArgs>>): Prisma__transaction_payment_methodClient<$Result.GetResult<Prisma.$transaction_payment_methodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the transaction model
   */
  interface transactionFieldRefs {
    readonly id: FieldRef<"transaction", 'String'>
    readonly name: FieldRef<"transaction", 'String'>
    readonly type: FieldRef<"transaction", 'TransactionType'>
    readonly amount: FieldRef<"transaction", 'Decimal'>
    readonly date: FieldRef<"transaction", 'DateTime'>
    readonly category_id: FieldRef<"transaction", 'String'>
    readonly payment_method_id: FieldRef<"transaction", 'String'>
    readonly created_at: FieldRef<"transaction", 'DateTime'>
    readonly updated_at: FieldRef<"transaction", 'DateTime'>
    readonly deleted_at: FieldRef<"transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * transaction findUnique
   */
  export type transactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transaction to fetch.
     */
    where: transactionWhereUniqueInput
  }

  /**
   * transaction findUniqueOrThrow
   */
  export type transactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transaction to fetch.
     */
    where: transactionWhereUniqueInput
  }

  /**
   * transaction findFirst
   */
  export type transactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transaction to fetch.
     */
    where?: transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transactions.
     */
    cursor?: transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * transaction findFirstOrThrow
   */
  export type transactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transaction to fetch.
     */
    where?: transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transactions.
     */
    cursor?: transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * transaction findMany
   */
  export type transactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where?: transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing transactions.
     */
    cursor?: transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * transaction create
   */
  export type transactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * The data needed to create a transaction.
     */
    data: XOR<transactionCreateInput, transactionUncheckedCreateInput>
  }

  /**
   * transaction createMany
   */
  export type transactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many transactions.
     */
    data: transactionCreateManyInput | transactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * transaction createManyAndReturn
   */
  export type transactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * The data used to create many transactions.
     */
    data: transactionCreateManyInput | transactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * transaction update
   */
  export type transactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * The data needed to update a transaction.
     */
    data: XOR<transactionUpdateInput, transactionUncheckedUpdateInput>
    /**
     * Choose, which transaction to update.
     */
    where: transactionWhereUniqueInput
  }

  /**
   * transaction updateMany
   */
  export type transactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update transactions.
     */
    data: XOR<transactionUpdateManyMutationInput, transactionUncheckedUpdateManyInput>
    /**
     * Filter which transactions to update
     */
    where?: transactionWhereInput
    /**
     * Limit how many transactions to update.
     */
    limit?: number
  }

  /**
   * transaction updateManyAndReturn
   */
  export type transactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * The data used to update transactions.
     */
    data: XOR<transactionUpdateManyMutationInput, transactionUncheckedUpdateManyInput>
    /**
     * Filter which transactions to update
     */
    where?: transactionWhereInput
    /**
     * Limit how many transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * transaction upsert
   */
  export type transactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * The filter to search for the transaction to update in case it exists.
     */
    where: transactionWhereUniqueInput
    /**
     * In case the transaction found by the `where` argument doesn't exist, create a new transaction with this data.
     */
    create: XOR<transactionCreateInput, transactionUncheckedCreateInput>
    /**
     * In case the transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<transactionUpdateInput, transactionUncheckedUpdateInput>
  }

  /**
   * transaction delete
   */
  export type transactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter which transaction to delete.
     */
    where: transactionWhereUniqueInput
  }

  /**
   * transaction deleteMany
   */
  export type transactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transactions to delete
     */
    where?: transactionWhereInput
    /**
     * Limit how many transactions to delete.
     */
    limit?: number
  }

  /**
   * transaction without action
   */
  export type transactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
  }


  /**
   * Model transaction_category
   */

  export type AggregateTransaction_category = {
    _count: Transaction_categoryCountAggregateOutputType | null
    _min: Transaction_categoryMinAggregateOutputType | null
    _max: Transaction_categoryMaxAggregateOutputType | null
  }

  export type Transaction_categoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    status: boolean | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Transaction_categoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    status: boolean | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Transaction_categoryCountAggregateOutputType = {
    id: number
    name: number
    status: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type Transaction_categoryMinAggregateInputType = {
    id?: true
    name?: true
    status?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Transaction_categoryMaxAggregateInputType = {
    id?: true
    name?: true
    status?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Transaction_categoryCountAggregateInputType = {
    id?: true
    name?: true
    status?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type Transaction_categoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transaction_category to aggregate.
     */
    where?: transaction_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaction_categories to fetch.
     */
    orderBy?: transaction_categoryOrderByWithRelationInput | transaction_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: transaction_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaction_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaction_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned transaction_categories
    **/
    _count?: true | Transaction_categoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Transaction_categoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Transaction_categoryMaxAggregateInputType
  }

  export type GetTransaction_categoryAggregateType<T extends Transaction_categoryAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction_category]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction_category[P]>
      : GetScalarType<T[P], AggregateTransaction_category[P]>
  }




  export type transaction_categoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transaction_categoryWhereInput
    orderBy?: transaction_categoryOrderByWithAggregationInput | transaction_categoryOrderByWithAggregationInput[]
    by: Transaction_categoryScalarFieldEnum[] | Transaction_categoryScalarFieldEnum
    having?: transaction_categoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Transaction_categoryCountAggregateInputType | true
    _min?: Transaction_categoryMinAggregateInputType
    _max?: Transaction_categoryMaxAggregateInputType
  }

  export type Transaction_categoryGroupByOutputType = {
    id: string
    name: string
    status: boolean
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    _count: Transaction_categoryCountAggregateOutputType | null
    _min: Transaction_categoryMinAggregateOutputType | null
    _max: Transaction_categoryMaxAggregateOutputType | null
  }

  type GetTransaction_categoryGroupByPayload<T extends transaction_categoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Transaction_categoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Transaction_categoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Transaction_categoryGroupByOutputType[P]>
            : GetScalarType<T[P], Transaction_categoryGroupByOutputType[P]>
        }
      >
    >


  export type transaction_categorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    transaction?: boolean | transaction_category$transactionArgs<ExtArgs>
    _count?: boolean | Transaction_categoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction_category"]>

  export type transaction_categorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["transaction_category"]>

  export type transaction_categorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["transaction_category"]>

  export type transaction_categorySelectScalar = {
    id?: boolean
    name?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type transaction_categoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "status" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["transaction_category"]>
  export type transaction_categoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | transaction_category$transactionArgs<ExtArgs>
    _count?: boolean | Transaction_categoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type transaction_categoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type transaction_categoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $transaction_categoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "transaction_category"
    objects: {
      transaction: Prisma.$transactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      status: boolean
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["transaction_category"]>
    composites: {}
  }

  type transaction_categoryGetPayload<S extends boolean | null | undefined | transaction_categoryDefaultArgs> = $Result.GetResult<Prisma.$transaction_categoryPayload, S>

  type transaction_categoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<transaction_categoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Transaction_categoryCountAggregateInputType | true
    }

  export interface transaction_categoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['transaction_category'], meta: { name: 'transaction_category' } }
    /**
     * Find zero or one Transaction_category that matches the filter.
     * @param {transaction_categoryFindUniqueArgs} args - Arguments to find a Transaction_category
     * @example
     * // Get one Transaction_category
     * const transaction_category = await prisma.transaction_category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends transaction_categoryFindUniqueArgs>(args: SelectSubset<T, transaction_categoryFindUniqueArgs<ExtArgs>>): Prisma__transaction_categoryClient<$Result.GetResult<Prisma.$transaction_categoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction_category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {transaction_categoryFindUniqueOrThrowArgs} args - Arguments to find a Transaction_category
     * @example
     * // Get one Transaction_category
     * const transaction_category = await prisma.transaction_category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends transaction_categoryFindUniqueOrThrowArgs>(args: SelectSubset<T, transaction_categoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__transaction_categoryClient<$Result.GetResult<Prisma.$transaction_categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction_category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_categoryFindFirstArgs} args - Arguments to find a Transaction_category
     * @example
     * // Get one Transaction_category
     * const transaction_category = await prisma.transaction_category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends transaction_categoryFindFirstArgs>(args?: SelectSubset<T, transaction_categoryFindFirstArgs<ExtArgs>>): Prisma__transaction_categoryClient<$Result.GetResult<Prisma.$transaction_categoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction_category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_categoryFindFirstOrThrowArgs} args - Arguments to find a Transaction_category
     * @example
     * // Get one Transaction_category
     * const transaction_category = await prisma.transaction_category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends transaction_categoryFindFirstOrThrowArgs>(args?: SelectSubset<T, transaction_categoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__transaction_categoryClient<$Result.GetResult<Prisma.$transaction_categoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transaction_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_categoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transaction_categories
     * const transaction_categories = await prisma.transaction_category.findMany()
     * 
     * // Get first 10 Transaction_categories
     * const transaction_categories = await prisma.transaction_category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transaction_categoryWithIdOnly = await prisma.transaction_category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends transaction_categoryFindManyArgs>(args?: SelectSubset<T, transaction_categoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaction_categoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction_category.
     * @param {transaction_categoryCreateArgs} args - Arguments to create a Transaction_category.
     * @example
     * // Create one Transaction_category
     * const Transaction_category = await prisma.transaction_category.create({
     *   data: {
     *     // ... data to create a Transaction_category
     *   }
     * })
     * 
     */
    create<T extends transaction_categoryCreateArgs>(args: SelectSubset<T, transaction_categoryCreateArgs<ExtArgs>>): Prisma__transaction_categoryClient<$Result.GetResult<Prisma.$transaction_categoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transaction_categories.
     * @param {transaction_categoryCreateManyArgs} args - Arguments to create many Transaction_categories.
     * @example
     * // Create many Transaction_categories
     * const transaction_category = await prisma.transaction_category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends transaction_categoryCreateManyArgs>(args?: SelectSubset<T, transaction_categoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transaction_categories and returns the data saved in the database.
     * @param {transaction_categoryCreateManyAndReturnArgs} args - Arguments to create many Transaction_categories.
     * @example
     * // Create many Transaction_categories
     * const transaction_category = await prisma.transaction_category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transaction_categories and only return the `id`
     * const transaction_categoryWithIdOnly = await prisma.transaction_category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends transaction_categoryCreateManyAndReturnArgs>(args?: SelectSubset<T, transaction_categoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaction_categoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction_category.
     * @param {transaction_categoryDeleteArgs} args - Arguments to delete one Transaction_category.
     * @example
     * // Delete one Transaction_category
     * const Transaction_category = await prisma.transaction_category.delete({
     *   where: {
     *     // ... filter to delete one Transaction_category
     *   }
     * })
     * 
     */
    delete<T extends transaction_categoryDeleteArgs>(args: SelectSubset<T, transaction_categoryDeleteArgs<ExtArgs>>): Prisma__transaction_categoryClient<$Result.GetResult<Prisma.$transaction_categoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction_category.
     * @param {transaction_categoryUpdateArgs} args - Arguments to update one Transaction_category.
     * @example
     * // Update one Transaction_category
     * const transaction_category = await prisma.transaction_category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends transaction_categoryUpdateArgs>(args: SelectSubset<T, transaction_categoryUpdateArgs<ExtArgs>>): Prisma__transaction_categoryClient<$Result.GetResult<Prisma.$transaction_categoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transaction_categories.
     * @param {transaction_categoryDeleteManyArgs} args - Arguments to filter Transaction_categories to delete.
     * @example
     * // Delete a few Transaction_categories
     * const { count } = await prisma.transaction_category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends transaction_categoryDeleteManyArgs>(args?: SelectSubset<T, transaction_categoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transaction_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_categoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transaction_categories
     * const transaction_category = await prisma.transaction_category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends transaction_categoryUpdateManyArgs>(args: SelectSubset<T, transaction_categoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transaction_categories and returns the data updated in the database.
     * @param {transaction_categoryUpdateManyAndReturnArgs} args - Arguments to update many Transaction_categories.
     * @example
     * // Update many Transaction_categories
     * const transaction_category = await prisma.transaction_category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transaction_categories and only return the `id`
     * const transaction_categoryWithIdOnly = await prisma.transaction_category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends transaction_categoryUpdateManyAndReturnArgs>(args: SelectSubset<T, transaction_categoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaction_categoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction_category.
     * @param {transaction_categoryUpsertArgs} args - Arguments to update or create a Transaction_category.
     * @example
     * // Update or create a Transaction_category
     * const transaction_category = await prisma.transaction_category.upsert({
     *   create: {
     *     // ... data to create a Transaction_category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction_category we want to update
     *   }
     * })
     */
    upsert<T extends transaction_categoryUpsertArgs>(args: SelectSubset<T, transaction_categoryUpsertArgs<ExtArgs>>): Prisma__transaction_categoryClient<$Result.GetResult<Prisma.$transaction_categoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transaction_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_categoryCountArgs} args - Arguments to filter Transaction_categories to count.
     * @example
     * // Count the number of Transaction_categories
     * const count = await prisma.transaction_category.count({
     *   where: {
     *     // ... the filter for the Transaction_categories we want to count
     *   }
     * })
    **/
    count<T extends transaction_categoryCountArgs>(
      args?: Subset<T, transaction_categoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Transaction_categoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction_category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Transaction_categoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Transaction_categoryAggregateArgs>(args: Subset<T, Transaction_categoryAggregateArgs>): Prisma.PrismaPromise<GetTransaction_categoryAggregateType<T>>

    /**
     * Group by Transaction_category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_categoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends transaction_categoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: transaction_categoryGroupByArgs['orderBy'] }
        : { orderBy?: transaction_categoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, transaction_categoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransaction_categoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the transaction_category model
   */
  readonly fields: transaction_categoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for transaction_category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__transaction_categoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transaction<T extends transaction_category$transactionArgs<ExtArgs> = {}>(args?: Subset<T, transaction_category$transactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the transaction_category model
   */
  interface transaction_categoryFieldRefs {
    readonly id: FieldRef<"transaction_category", 'String'>
    readonly name: FieldRef<"transaction_category", 'String'>
    readonly status: FieldRef<"transaction_category", 'Boolean'>
    readonly created_at: FieldRef<"transaction_category", 'DateTime'>
    readonly updated_at: FieldRef<"transaction_category", 'DateTime'>
    readonly deleted_at: FieldRef<"transaction_category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * transaction_category findUnique
   */
  export type transaction_categoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_category
     */
    select?: transaction_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_category
     */
    omit?: transaction_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_categoryInclude<ExtArgs> | null
    /**
     * Filter, which transaction_category to fetch.
     */
    where: transaction_categoryWhereUniqueInput
  }

  /**
   * transaction_category findUniqueOrThrow
   */
  export type transaction_categoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_category
     */
    select?: transaction_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_category
     */
    omit?: transaction_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_categoryInclude<ExtArgs> | null
    /**
     * Filter, which transaction_category to fetch.
     */
    where: transaction_categoryWhereUniqueInput
  }

  /**
   * transaction_category findFirst
   */
  export type transaction_categoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_category
     */
    select?: transaction_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_category
     */
    omit?: transaction_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_categoryInclude<ExtArgs> | null
    /**
     * Filter, which transaction_category to fetch.
     */
    where?: transaction_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaction_categories to fetch.
     */
    orderBy?: transaction_categoryOrderByWithRelationInput | transaction_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transaction_categories.
     */
    cursor?: transaction_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaction_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaction_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transaction_categories.
     */
    distinct?: Transaction_categoryScalarFieldEnum | Transaction_categoryScalarFieldEnum[]
  }

  /**
   * transaction_category findFirstOrThrow
   */
  export type transaction_categoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_category
     */
    select?: transaction_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_category
     */
    omit?: transaction_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_categoryInclude<ExtArgs> | null
    /**
     * Filter, which transaction_category to fetch.
     */
    where?: transaction_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaction_categories to fetch.
     */
    orderBy?: transaction_categoryOrderByWithRelationInput | transaction_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transaction_categories.
     */
    cursor?: transaction_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaction_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaction_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transaction_categories.
     */
    distinct?: Transaction_categoryScalarFieldEnum | Transaction_categoryScalarFieldEnum[]
  }

  /**
   * transaction_category findMany
   */
  export type transaction_categoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_category
     */
    select?: transaction_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_category
     */
    omit?: transaction_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_categoryInclude<ExtArgs> | null
    /**
     * Filter, which transaction_categories to fetch.
     */
    where?: transaction_categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaction_categories to fetch.
     */
    orderBy?: transaction_categoryOrderByWithRelationInput | transaction_categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing transaction_categories.
     */
    cursor?: transaction_categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaction_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaction_categories.
     */
    skip?: number
    distinct?: Transaction_categoryScalarFieldEnum | Transaction_categoryScalarFieldEnum[]
  }

  /**
   * transaction_category create
   */
  export type transaction_categoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_category
     */
    select?: transaction_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_category
     */
    omit?: transaction_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_categoryInclude<ExtArgs> | null
    /**
     * The data needed to create a transaction_category.
     */
    data: XOR<transaction_categoryCreateInput, transaction_categoryUncheckedCreateInput>
  }

  /**
   * transaction_category createMany
   */
  export type transaction_categoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many transaction_categories.
     */
    data: transaction_categoryCreateManyInput | transaction_categoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * transaction_category createManyAndReturn
   */
  export type transaction_categoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_category
     */
    select?: transaction_categorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_category
     */
    omit?: transaction_categoryOmit<ExtArgs> | null
    /**
     * The data used to create many transaction_categories.
     */
    data: transaction_categoryCreateManyInput | transaction_categoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * transaction_category update
   */
  export type transaction_categoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_category
     */
    select?: transaction_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_category
     */
    omit?: transaction_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_categoryInclude<ExtArgs> | null
    /**
     * The data needed to update a transaction_category.
     */
    data: XOR<transaction_categoryUpdateInput, transaction_categoryUncheckedUpdateInput>
    /**
     * Choose, which transaction_category to update.
     */
    where: transaction_categoryWhereUniqueInput
  }

  /**
   * transaction_category updateMany
   */
  export type transaction_categoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update transaction_categories.
     */
    data: XOR<transaction_categoryUpdateManyMutationInput, transaction_categoryUncheckedUpdateManyInput>
    /**
     * Filter which transaction_categories to update
     */
    where?: transaction_categoryWhereInput
    /**
     * Limit how many transaction_categories to update.
     */
    limit?: number
  }

  /**
   * transaction_category updateManyAndReturn
   */
  export type transaction_categoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_category
     */
    select?: transaction_categorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_category
     */
    omit?: transaction_categoryOmit<ExtArgs> | null
    /**
     * The data used to update transaction_categories.
     */
    data: XOR<transaction_categoryUpdateManyMutationInput, transaction_categoryUncheckedUpdateManyInput>
    /**
     * Filter which transaction_categories to update
     */
    where?: transaction_categoryWhereInput
    /**
     * Limit how many transaction_categories to update.
     */
    limit?: number
  }

  /**
   * transaction_category upsert
   */
  export type transaction_categoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_category
     */
    select?: transaction_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_category
     */
    omit?: transaction_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_categoryInclude<ExtArgs> | null
    /**
     * The filter to search for the transaction_category to update in case it exists.
     */
    where: transaction_categoryWhereUniqueInput
    /**
     * In case the transaction_category found by the `where` argument doesn't exist, create a new transaction_category with this data.
     */
    create: XOR<transaction_categoryCreateInput, transaction_categoryUncheckedCreateInput>
    /**
     * In case the transaction_category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<transaction_categoryUpdateInput, transaction_categoryUncheckedUpdateInput>
  }

  /**
   * transaction_category delete
   */
  export type transaction_categoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_category
     */
    select?: transaction_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_category
     */
    omit?: transaction_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_categoryInclude<ExtArgs> | null
    /**
     * Filter which transaction_category to delete.
     */
    where: transaction_categoryWhereUniqueInput
  }

  /**
   * transaction_category deleteMany
   */
  export type transaction_categoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transaction_categories to delete
     */
    where?: transaction_categoryWhereInput
    /**
     * Limit how many transaction_categories to delete.
     */
    limit?: number
  }

  /**
   * transaction_category.transaction
   */
  export type transaction_category$transactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    where?: transactionWhereInput
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    cursor?: transactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * transaction_category without action
   */
  export type transaction_categoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_category
     */
    select?: transaction_categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_category
     */
    omit?: transaction_categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_categoryInclude<ExtArgs> | null
  }


  /**
   * Model transaction_payment_method
   */

  export type AggregateTransaction_payment_method = {
    _count: Transaction_payment_methodCountAggregateOutputType | null
    _min: Transaction_payment_methodMinAggregateOutputType | null
    _max: Transaction_payment_methodMaxAggregateOutputType | null
  }

  export type Transaction_payment_methodMinAggregateOutputType = {
    id: string | null
    name: string | null
    status: boolean | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Transaction_payment_methodMaxAggregateOutputType = {
    id: string | null
    name: string | null
    status: boolean | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Transaction_payment_methodCountAggregateOutputType = {
    id: number
    name: number
    status: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type Transaction_payment_methodMinAggregateInputType = {
    id?: true
    name?: true
    status?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Transaction_payment_methodMaxAggregateInputType = {
    id?: true
    name?: true
    status?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Transaction_payment_methodCountAggregateInputType = {
    id?: true
    name?: true
    status?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type Transaction_payment_methodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transaction_payment_method to aggregate.
     */
    where?: transaction_payment_methodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaction_payment_methods to fetch.
     */
    orderBy?: transaction_payment_methodOrderByWithRelationInput | transaction_payment_methodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: transaction_payment_methodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaction_payment_methods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaction_payment_methods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned transaction_payment_methods
    **/
    _count?: true | Transaction_payment_methodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Transaction_payment_methodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Transaction_payment_methodMaxAggregateInputType
  }

  export type GetTransaction_payment_methodAggregateType<T extends Transaction_payment_methodAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction_payment_method]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction_payment_method[P]>
      : GetScalarType<T[P], AggregateTransaction_payment_method[P]>
  }




  export type transaction_payment_methodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transaction_payment_methodWhereInput
    orderBy?: transaction_payment_methodOrderByWithAggregationInput | transaction_payment_methodOrderByWithAggregationInput[]
    by: Transaction_payment_methodScalarFieldEnum[] | Transaction_payment_methodScalarFieldEnum
    having?: transaction_payment_methodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Transaction_payment_methodCountAggregateInputType | true
    _min?: Transaction_payment_methodMinAggregateInputType
    _max?: Transaction_payment_methodMaxAggregateInputType
  }

  export type Transaction_payment_methodGroupByOutputType = {
    id: string
    name: string
    status: boolean
    created_at: Date
    updated_at: Date
    deleted_at: Date | null
    _count: Transaction_payment_methodCountAggregateOutputType | null
    _min: Transaction_payment_methodMinAggregateOutputType | null
    _max: Transaction_payment_methodMaxAggregateOutputType | null
  }

  type GetTransaction_payment_methodGroupByPayload<T extends transaction_payment_methodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Transaction_payment_methodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Transaction_payment_methodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Transaction_payment_methodGroupByOutputType[P]>
            : GetScalarType<T[P], Transaction_payment_methodGroupByOutputType[P]>
        }
      >
    >


  export type transaction_payment_methodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    transaction?: boolean | transaction_payment_method$transactionArgs<ExtArgs>
    _count?: boolean | Transaction_payment_methodCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction_payment_method"]>

  export type transaction_payment_methodSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["transaction_payment_method"]>

  export type transaction_payment_methodSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["transaction_payment_method"]>

  export type transaction_payment_methodSelectScalar = {
    id?: boolean
    name?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type transaction_payment_methodOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "status" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["transaction_payment_method"]>
  export type transaction_payment_methodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | transaction_payment_method$transactionArgs<ExtArgs>
    _count?: boolean | Transaction_payment_methodCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type transaction_payment_methodIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type transaction_payment_methodIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $transaction_payment_methodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "transaction_payment_method"
    objects: {
      transaction: Prisma.$transactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      status: boolean
      created_at: Date
      updated_at: Date
      deleted_at: Date | null
    }, ExtArgs["result"]["transaction_payment_method"]>
    composites: {}
  }

  type transaction_payment_methodGetPayload<S extends boolean | null | undefined | transaction_payment_methodDefaultArgs> = $Result.GetResult<Prisma.$transaction_payment_methodPayload, S>

  type transaction_payment_methodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<transaction_payment_methodFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Transaction_payment_methodCountAggregateInputType | true
    }

  export interface transaction_payment_methodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['transaction_payment_method'], meta: { name: 'transaction_payment_method' } }
    /**
     * Find zero or one Transaction_payment_method that matches the filter.
     * @param {transaction_payment_methodFindUniqueArgs} args - Arguments to find a Transaction_payment_method
     * @example
     * // Get one Transaction_payment_method
     * const transaction_payment_method = await prisma.transaction_payment_method.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends transaction_payment_methodFindUniqueArgs>(args: SelectSubset<T, transaction_payment_methodFindUniqueArgs<ExtArgs>>): Prisma__transaction_payment_methodClient<$Result.GetResult<Prisma.$transaction_payment_methodPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction_payment_method that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {transaction_payment_methodFindUniqueOrThrowArgs} args - Arguments to find a Transaction_payment_method
     * @example
     * // Get one Transaction_payment_method
     * const transaction_payment_method = await prisma.transaction_payment_method.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends transaction_payment_methodFindUniqueOrThrowArgs>(args: SelectSubset<T, transaction_payment_methodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__transaction_payment_methodClient<$Result.GetResult<Prisma.$transaction_payment_methodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction_payment_method that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_payment_methodFindFirstArgs} args - Arguments to find a Transaction_payment_method
     * @example
     * // Get one Transaction_payment_method
     * const transaction_payment_method = await prisma.transaction_payment_method.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends transaction_payment_methodFindFirstArgs>(args?: SelectSubset<T, transaction_payment_methodFindFirstArgs<ExtArgs>>): Prisma__transaction_payment_methodClient<$Result.GetResult<Prisma.$transaction_payment_methodPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction_payment_method that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_payment_methodFindFirstOrThrowArgs} args - Arguments to find a Transaction_payment_method
     * @example
     * // Get one Transaction_payment_method
     * const transaction_payment_method = await prisma.transaction_payment_method.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends transaction_payment_methodFindFirstOrThrowArgs>(args?: SelectSubset<T, transaction_payment_methodFindFirstOrThrowArgs<ExtArgs>>): Prisma__transaction_payment_methodClient<$Result.GetResult<Prisma.$transaction_payment_methodPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transaction_payment_methods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_payment_methodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transaction_payment_methods
     * const transaction_payment_methods = await prisma.transaction_payment_method.findMany()
     * 
     * // Get first 10 Transaction_payment_methods
     * const transaction_payment_methods = await prisma.transaction_payment_method.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transaction_payment_methodWithIdOnly = await prisma.transaction_payment_method.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends transaction_payment_methodFindManyArgs>(args?: SelectSubset<T, transaction_payment_methodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaction_payment_methodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction_payment_method.
     * @param {transaction_payment_methodCreateArgs} args - Arguments to create a Transaction_payment_method.
     * @example
     * // Create one Transaction_payment_method
     * const Transaction_payment_method = await prisma.transaction_payment_method.create({
     *   data: {
     *     // ... data to create a Transaction_payment_method
     *   }
     * })
     * 
     */
    create<T extends transaction_payment_methodCreateArgs>(args: SelectSubset<T, transaction_payment_methodCreateArgs<ExtArgs>>): Prisma__transaction_payment_methodClient<$Result.GetResult<Prisma.$transaction_payment_methodPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transaction_payment_methods.
     * @param {transaction_payment_methodCreateManyArgs} args - Arguments to create many Transaction_payment_methods.
     * @example
     * // Create many Transaction_payment_methods
     * const transaction_payment_method = await prisma.transaction_payment_method.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends transaction_payment_methodCreateManyArgs>(args?: SelectSubset<T, transaction_payment_methodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transaction_payment_methods and returns the data saved in the database.
     * @param {transaction_payment_methodCreateManyAndReturnArgs} args - Arguments to create many Transaction_payment_methods.
     * @example
     * // Create many Transaction_payment_methods
     * const transaction_payment_method = await prisma.transaction_payment_method.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transaction_payment_methods and only return the `id`
     * const transaction_payment_methodWithIdOnly = await prisma.transaction_payment_method.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends transaction_payment_methodCreateManyAndReturnArgs>(args?: SelectSubset<T, transaction_payment_methodCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaction_payment_methodPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction_payment_method.
     * @param {transaction_payment_methodDeleteArgs} args - Arguments to delete one Transaction_payment_method.
     * @example
     * // Delete one Transaction_payment_method
     * const Transaction_payment_method = await prisma.transaction_payment_method.delete({
     *   where: {
     *     // ... filter to delete one Transaction_payment_method
     *   }
     * })
     * 
     */
    delete<T extends transaction_payment_methodDeleteArgs>(args: SelectSubset<T, transaction_payment_methodDeleteArgs<ExtArgs>>): Prisma__transaction_payment_methodClient<$Result.GetResult<Prisma.$transaction_payment_methodPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction_payment_method.
     * @param {transaction_payment_methodUpdateArgs} args - Arguments to update one Transaction_payment_method.
     * @example
     * // Update one Transaction_payment_method
     * const transaction_payment_method = await prisma.transaction_payment_method.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends transaction_payment_methodUpdateArgs>(args: SelectSubset<T, transaction_payment_methodUpdateArgs<ExtArgs>>): Prisma__transaction_payment_methodClient<$Result.GetResult<Prisma.$transaction_payment_methodPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transaction_payment_methods.
     * @param {transaction_payment_methodDeleteManyArgs} args - Arguments to filter Transaction_payment_methods to delete.
     * @example
     * // Delete a few Transaction_payment_methods
     * const { count } = await prisma.transaction_payment_method.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends transaction_payment_methodDeleteManyArgs>(args?: SelectSubset<T, transaction_payment_methodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transaction_payment_methods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_payment_methodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transaction_payment_methods
     * const transaction_payment_method = await prisma.transaction_payment_method.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends transaction_payment_methodUpdateManyArgs>(args: SelectSubset<T, transaction_payment_methodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transaction_payment_methods and returns the data updated in the database.
     * @param {transaction_payment_methodUpdateManyAndReturnArgs} args - Arguments to update many Transaction_payment_methods.
     * @example
     * // Update many Transaction_payment_methods
     * const transaction_payment_method = await prisma.transaction_payment_method.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transaction_payment_methods and only return the `id`
     * const transaction_payment_methodWithIdOnly = await prisma.transaction_payment_method.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends transaction_payment_methodUpdateManyAndReturnArgs>(args: SelectSubset<T, transaction_payment_methodUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaction_payment_methodPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction_payment_method.
     * @param {transaction_payment_methodUpsertArgs} args - Arguments to update or create a Transaction_payment_method.
     * @example
     * // Update or create a Transaction_payment_method
     * const transaction_payment_method = await prisma.transaction_payment_method.upsert({
     *   create: {
     *     // ... data to create a Transaction_payment_method
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction_payment_method we want to update
     *   }
     * })
     */
    upsert<T extends transaction_payment_methodUpsertArgs>(args: SelectSubset<T, transaction_payment_methodUpsertArgs<ExtArgs>>): Prisma__transaction_payment_methodClient<$Result.GetResult<Prisma.$transaction_payment_methodPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transaction_payment_methods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_payment_methodCountArgs} args - Arguments to filter Transaction_payment_methods to count.
     * @example
     * // Count the number of Transaction_payment_methods
     * const count = await prisma.transaction_payment_method.count({
     *   where: {
     *     // ... the filter for the Transaction_payment_methods we want to count
     *   }
     * })
    **/
    count<T extends transaction_payment_methodCountArgs>(
      args?: Subset<T, transaction_payment_methodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Transaction_payment_methodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction_payment_method.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Transaction_payment_methodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Transaction_payment_methodAggregateArgs>(args: Subset<T, Transaction_payment_methodAggregateArgs>): Prisma.PrismaPromise<GetTransaction_payment_methodAggregateType<T>>

    /**
     * Group by Transaction_payment_method.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaction_payment_methodGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends transaction_payment_methodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: transaction_payment_methodGroupByArgs['orderBy'] }
        : { orderBy?: transaction_payment_methodGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, transaction_payment_methodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransaction_payment_methodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the transaction_payment_method model
   */
  readonly fields: transaction_payment_methodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for transaction_payment_method.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__transaction_payment_methodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transaction<T extends transaction_payment_method$transactionArgs<ExtArgs> = {}>(args?: Subset<T, transaction_payment_method$transactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the transaction_payment_method model
   */
  interface transaction_payment_methodFieldRefs {
    readonly id: FieldRef<"transaction_payment_method", 'String'>
    readonly name: FieldRef<"transaction_payment_method", 'String'>
    readonly status: FieldRef<"transaction_payment_method", 'Boolean'>
    readonly created_at: FieldRef<"transaction_payment_method", 'DateTime'>
    readonly updated_at: FieldRef<"transaction_payment_method", 'DateTime'>
    readonly deleted_at: FieldRef<"transaction_payment_method", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * transaction_payment_method findUnique
   */
  export type transaction_payment_methodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_payment_method
     */
    select?: transaction_payment_methodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_payment_method
     */
    omit?: transaction_payment_methodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_payment_methodInclude<ExtArgs> | null
    /**
     * Filter, which transaction_payment_method to fetch.
     */
    where: transaction_payment_methodWhereUniqueInput
  }

  /**
   * transaction_payment_method findUniqueOrThrow
   */
  export type transaction_payment_methodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_payment_method
     */
    select?: transaction_payment_methodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_payment_method
     */
    omit?: transaction_payment_methodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_payment_methodInclude<ExtArgs> | null
    /**
     * Filter, which transaction_payment_method to fetch.
     */
    where: transaction_payment_methodWhereUniqueInput
  }

  /**
   * transaction_payment_method findFirst
   */
  export type transaction_payment_methodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_payment_method
     */
    select?: transaction_payment_methodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_payment_method
     */
    omit?: transaction_payment_methodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_payment_methodInclude<ExtArgs> | null
    /**
     * Filter, which transaction_payment_method to fetch.
     */
    where?: transaction_payment_methodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaction_payment_methods to fetch.
     */
    orderBy?: transaction_payment_methodOrderByWithRelationInput | transaction_payment_methodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transaction_payment_methods.
     */
    cursor?: transaction_payment_methodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaction_payment_methods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaction_payment_methods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transaction_payment_methods.
     */
    distinct?: Transaction_payment_methodScalarFieldEnum | Transaction_payment_methodScalarFieldEnum[]
  }

  /**
   * transaction_payment_method findFirstOrThrow
   */
  export type transaction_payment_methodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_payment_method
     */
    select?: transaction_payment_methodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_payment_method
     */
    omit?: transaction_payment_methodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_payment_methodInclude<ExtArgs> | null
    /**
     * Filter, which transaction_payment_method to fetch.
     */
    where?: transaction_payment_methodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaction_payment_methods to fetch.
     */
    orderBy?: transaction_payment_methodOrderByWithRelationInput | transaction_payment_methodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transaction_payment_methods.
     */
    cursor?: transaction_payment_methodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaction_payment_methods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaction_payment_methods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transaction_payment_methods.
     */
    distinct?: Transaction_payment_methodScalarFieldEnum | Transaction_payment_methodScalarFieldEnum[]
  }

  /**
   * transaction_payment_method findMany
   */
  export type transaction_payment_methodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_payment_method
     */
    select?: transaction_payment_methodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_payment_method
     */
    omit?: transaction_payment_methodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_payment_methodInclude<ExtArgs> | null
    /**
     * Filter, which transaction_payment_methods to fetch.
     */
    where?: transaction_payment_methodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaction_payment_methods to fetch.
     */
    orderBy?: transaction_payment_methodOrderByWithRelationInput | transaction_payment_methodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing transaction_payment_methods.
     */
    cursor?: transaction_payment_methodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaction_payment_methods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaction_payment_methods.
     */
    skip?: number
    distinct?: Transaction_payment_methodScalarFieldEnum | Transaction_payment_methodScalarFieldEnum[]
  }

  /**
   * transaction_payment_method create
   */
  export type transaction_payment_methodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_payment_method
     */
    select?: transaction_payment_methodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_payment_method
     */
    omit?: transaction_payment_methodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_payment_methodInclude<ExtArgs> | null
    /**
     * The data needed to create a transaction_payment_method.
     */
    data: XOR<transaction_payment_methodCreateInput, transaction_payment_methodUncheckedCreateInput>
  }

  /**
   * transaction_payment_method createMany
   */
  export type transaction_payment_methodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many transaction_payment_methods.
     */
    data: transaction_payment_methodCreateManyInput | transaction_payment_methodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * transaction_payment_method createManyAndReturn
   */
  export type transaction_payment_methodCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_payment_method
     */
    select?: transaction_payment_methodSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_payment_method
     */
    omit?: transaction_payment_methodOmit<ExtArgs> | null
    /**
     * The data used to create many transaction_payment_methods.
     */
    data: transaction_payment_methodCreateManyInput | transaction_payment_methodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * transaction_payment_method update
   */
  export type transaction_payment_methodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_payment_method
     */
    select?: transaction_payment_methodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_payment_method
     */
    omit?: transaction_payment_methodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_payment_methodInclude<ExtArgs> | null
    /**
     * The data needed to update a transaction_payment_method.
     */
    data: XOR<transaction_payment_methodUpdateInput, transaction_payment_methodUncheckedUpdateInput>
    /**
     * Choose, which transaction_payment_method to update.
     */
    where: transaction_payment_methodWhereUniqueInput
  }

  /**
   * transaction_payment_method updateMany
   */
  export type transaction_payment_methodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update transaction_payment_methods.
     */
    data: XOR<transaction_payment_methodUpdateManyMutationInput, transaction_payment_methodUncheckedUpdateManyInput>
    /**
     * Filter which transaction_payment_methods to update
     */
    where?: transaction_payment_methodWhereInput
    /**
     * Limit how many transaction_payment_methods to update.
     */
    limit?: number
  }

  /**
   * transaction_payment_method updateManyAndReturn
   */
  export type transaction_payment_methodUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_payment_method
     */
    select?: transaction_payment_methodSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_payment_method
     */
    omit?: transaction_payment_methodOmit<ExtArgs> | null
    /**
     * The data used to update transaction_payment_methods.
     */
    data: XOR<transaction_payment_methodUpdateManyMutationInput, transaction_payment_methodUncheckedUpdateManyInput>
    /**
     * Filter which transaction_payment_methods to update
     */
    where?: transaction_payment_methodWhereInput
    /**
     * Limit how many transaction_payment_methods to update.
     */
    limit?: number
  }

  /**
   * transaction_payment_method upsert
   */
  export type transaction_payment_methodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_payment_method
     */
    select?: transaction_payment_methodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_payment_method
     */
    omit?: transaction_payment_methodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_payment_methodInclude<ExtArgs> | null
    /**
     * The filter to search for the transaction_payment_method to update in case it exists.
     */
    where: transaction_payment_methodWhereUniqueInput
    /**
     * In case the transaction_payment_method found by the `where` argument doesn't exist, create a new transaction_payment_method with this data.
     */
    create: XOR<transaction_payment_methodCreateInput, transaction_payment_methodUncheckedCreateInput>
    /**
     * In case the transaction_payment_method was found with the provided `where` argument, update it with this data.
     */
    update: XOR<transaction_payment_methodUpdateInput, transaction_payment_methodUncheckedUpdateInput>
  }

  /**
   * transaction_payment_method delete
   */
  export type transaction_payment_methodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_payment_method
     */
    select?: transaction_payment_methodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_payment_method
     */
    omit?: transaction_payment_methodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_payment_methodInclude<ExtArgs> | null
    /**
     * Filter which transaction_payment_method to delete.
     */
    where: transaction_payment_methodWhereUniqueInput
  }

  /**
   * transaction_payment_method deleteMany
   */
  export type transaction_payment_methodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transaction_payment_methods to delete
     */
    where?: transaction_payment_methodWhereInput
    /**
     * Limit how many transaction_payment_methods to delete.
     */
    limit?: number
  }

  /**
   * transaction_payment_method.transaction
   */
  export type transaction_payment_method$transactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    where?: transactionWhereInput
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    cursor?: transactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * transaction_payment_method without action
   */
  export type transaction_payment_methodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction_payment_method
     */
    select?: transaction_payment_methodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction_payment_method
     */
    omit?: transaction_payment_methodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaction_payment_methodInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    change_passowrd: 'change_passowrd',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    amount: 'amount',
    date: 'date',
    category_id: 'category_id',
    payment_method_id: 'payment_method_id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const Transaction_categoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type Transaction_categoryScalarFieldEnum = (typeof Transaction_categoryScalarFieldEnum)[keyof typeof Transaction_categoryScalarFieldEnum]


  export const Transaction_payment_methodScalarFieldEnum: {
    id: 'id',
    name: 'name',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type Transaction_payment_methodScalarFieldEnum = (typeof Transaction_payment_methodScalarFieldEnum)[keyof typeof Transaction_payment_methodScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'TransactionType'
   */
  export type EnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType'>
    


  /**
   * Reference to a field of type 'TransactionType[]'
   */
  export type ListEnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    change_passowrd?: BoolFilter<"User"> | boolean
    status?: BoolFilter<"User"> | boolean
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    deleted_at?: DateTimeNullableFilter<"User"> | Date | string | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    change_passowrd?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    change_passowrd?: BoolFilter<"User"> | boolean
    status?: BoolFilter<"User"> | boolean
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    deleted_at?: DateTimeNullableFilter<"User"> | Date | string | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    change_passowrd?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    change_passowrd?: BoolWithAggregatesFilter<"User"> | boolean
    status?: BoolWithAggregatesFilter<"User"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type transactionWhereInput = {
    AND?: transactionWhereInput | transactionWhereInput[]
    OR?: transactionWhereInput[]
    NOT?: transactionWhereInput | transactionWhereInput[]
    id?: StringFilter<"transaction"> | string
    name?: StringFilter<"transaction"> | string
    type?: EnumTransactionTypeFilter<"transaction"> | $Enums.TransactionType
    amount?: DecimalFilter<"transaction"> | Decimal | DecimalJsLike | number | string
    date?: DateTimeFilter<"transaction"> | Date | string
    category_id?: StringFilter<"transaction"> | string
    payment_method_id?: StringFilter<"transaction"> | string
    created_at?: DateTimeFilter<"transaction"> | Date | string
    updated_at?: DateTimeFilter<"transaction"> | Date | string
    deleted_at?: DateTimeNullableFilter<"transaction"> | Date | string | null
    transaction_category?: XOR<Transaction_categoryScalarRelationFilter, transaction_categoryWhereInput>
    payment_method?: XOR<Transaction_payment_methodScalarRelationFilter, transaction_payment_methodWhereInput>
  }

  export type transactionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    category_id?: SortOrder
    payment_method_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    transaction_category?: transaction_categoryOrderByWithRelationInput
    payment_method?: transaction_payment_methodOrderByWithRelationInput
  }

  export type transactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: transactionWhereInput | transactionWhereInput[]
    OR?: transactionWhereInput[]
    NOT?: transactionWhereInput | transactionWhereInput[]
    name?: StringFilter<"transaction"> | string
    type?: EnumTransactionTypeFilter<"transaction"> | $Enums.TransactionType
    amount?: DecimalFilter<"transaction"> | Decimal | DecimalJsLike | number | string
    date?: DateTimeFilter<"transaction"> | Date | string
    category_id?: StringFilter<"transaction"> | string
    payment_method_id?: StringFilter<"transaction"> | string
    created_at?: DateTimeFilter<"transaction"> | Date | string
    updated_at?: DateTimeFilter<"transaction"> | Date | string
    deleted_at?: DateTimeNullableFilter<"transaction"> | Date | string | null
    transaction_category?: XOR<Transaction_categoryScalarRelationFilter, transaction_categoryWhereInput>
    payment_method?: XOR<Transaction_payment_methodScalarRelationFilter, transaction_payment_methodWhereInput>
  }, "id">

  export type transactionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    category_id?: SortOrder
    payment_method_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: transactionCountOrderByAggregateInput
    _avg?: transactionAvgOrderByAggregateInput
    _max?: transactionMaxOrderByAggregateInput
    _min?: transactionMinOrderByAggregateInput
    _sum?: transactionSumOrderByAggregateInput
  }

  export type transactionScalarWhereWithAggregatesInput = {
    AND?: transactionScalarWhereWithAggregatesInput | transactionScalarWhereWithAggregatesInput[]
    OR?: transactionScalarWhereWithAggregatesInput[]
    NOT?: transactionScalarWhereWithAggregatesInput | transactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"transaction"> | string
    name?: StringWithAggregatesFilter<"transaction"> | string
    type?: EnumTransactionTypeWithAggregatesFilter<"transaction"> | $Enums.TransactionType
    amount?: DecimalWithAggregatesFilter<"transaction"> | Decimal | DecimalJsLike | number | string
    date?: DateTimeWithAggregatesFilter<"transaction"> | Date | string
    category_id?: StringWithAggregatesFilter<"transaction"> | string
    payment_method_id?: StringWithAggregatesFilter<"transaction"> | string
    created_at?: DateTimeWithAggregatesFilter<"transaction"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"transaction"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"transaction"> | Date | string | null
  }

  export type transaction_categoryWhereInput = {
    AND?: transaction_categoryWhereInput | transaction_categoryWhereInput[]
    OR?: transaction_categoryWhereInput[]
    NOT?: transaction_categoryWhereInput | transaction_categoryWhereInput[]
    id?: StringFilter<"transaction_category"> | string
    name?: StringFilter<"transaction_category"> | string
    status?: BoolFilter<"transaction_category"> | boolean
    created_at?: DateTimeFilter<"transaction_category"> | Date | string
    updated_at?: DateTimeFilter<"transaction_category"> | Date | string
    deleted_at?: DateTimeNullableFilter<"transaction_category"> | Date | string | null
    transaction?: TransactionListRelationFilter
  }

  export type transaction_categoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    transaction?: transactionOrderByRelationAggregateInput
  }

  export type transaction_categoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: transaction_categoryWhereInput | transaction_categoryWhereInput[]
    OR?: transaction_categoryWhereInput[]
    NOT?: transaction_categoryWhereInput | transaction_categoryWhereInput[]
    name?: StringFilter<"transaction_category"> | string
    status?: BoolFilter<"transaction_category"> | boolean
    created_at?: DateTimeFilter<"transaction_category"> | Date | string
    updated_at?: DateTimeFilter<"transaction_category"> | Date | string
    deleted_at?: DateTimeNullableFilter<"transaction_category"> | Date | string | null
    transaction?: TransactionListRelationFilter
  }, "id">

  export type transaction_categoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: transaction_categoryCountOrderByAggregateInput
    _max?: transaction_categoryMaxOrderByAggregateInput
    _min?: transaction_categoryMinOrderByAggregateInput
  }

  export type transaction_categoryScalarWhereWithAggregatesInput = {
    AND?: transaction_categoryScalarWhereWithAggregatesInput | transaction_categoryScalarWhereWithAggregatesInput[]
    OR?: transaction_categoryScalarWhereWithAggregatesInput[]
    NOT?: transaction_categoryScalarWhereWithAggregatesInput | transaction_categoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"transaction_category"> | string
    name?: StringWithAggregatesFilter<"transaction_category"> | string
    status?: BoolWithAggregatesFilter<"transaction_category"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"transaction_category"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"transaction_category"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"transaction_category"> | Date | string | null
  }

  export type transaction_payment_methodWhereInput = {
    AND?: transaction_payment_methodWhereInput | transaction_payment_methodWhereInput[]
    OR?: transaction_payment_methodWhereInput[]
    NOT?: transaction_payment_methodWhereInput | transaction_payment_methodWhereInput[]
    id?: StringFilter<"transaction_payment_method"> | string
    name?: StringFilter<"transaction_payment_method"> | string
    status?: BoolFilter<"transaction_payment_method"> | boolean
    created_at?: DateTimeFilter<"transaction_payment_method"> | Date | string
    updated_at?: DateTimeFilter<"transaction_payment_method"> | Date | string
    deleted_at?: DateTimeNullableFilter<"transaction_payment_method"> | Date | string | null
    transaction?: TransactionListRelationFilter
  }

  export type transaction_payment_methodOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    transaction?: transactionOrderByRelationAggregateInput
  }

  export type transaction_payment_methodWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: transaction_payment_methodWhereInput | transaction_payment_methodWhereInput[]
    OR?: transaction_payment_methodWhereInput[]
    NOT?: transaction_payment_methodWhereInput | transaction_payment_methodWhereInput[]
    name?: StringFilter<"transaction_payment_method"> | string
    status?: BoolFilter<"transaction_payment_method"> | boolean
    created_at?: DateTimeFilter<"transaction_payment_method"> | Date | string
    updated_at?: DateTimeFilter<"transaction_payment_method"> | Date | string
    deleted_at?: DateTimeNullableFilter<"transaction_payment_method"> | Date | string | null
    transaction?: TransactionListRelationFilter
  }, "id">

  export type transaction_payment_methodOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: transaction_payment_methodCountOrderByAggregateInput
    _max?: transaction_payment_methodMaxOrderByAggregateInput
    _min?: transaction_payment_methodMinOrderByAggregateInput
  }

  export type transaction_payment_methodScalarWhereWithAggregatesInput = {
    AND?: transaction_payment_methodScalarWhereWithAggregatesInput | transaction_payment_methodScalarWhereWithAggregatesInput[]
    OR?: transaction_payment_methodScalarWhereWithAggregatesInput[]
    NOT?: transaction_payment_methodScalarWhereWithAggregatesInput | transaction_payment_methodScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"transaction_payment_method"> | string
    name?: StringWithAggregatesFilter<"transaction_payment_method"> | string
    status?: BoolWithAggregatesFilter<"transaction_payment_method"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"transaction_payment_method"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"transaction_payment_method"> | Date | string
    deleted_at?: DateTimeNullableWithAggregatesFilter<"transaction_payment_method"> | Date | string | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    password: string
    change_passowrd?: boolean
    status?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    password: string
    change_passowrd?: boolean
    status?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    change_passowrd?: BoolFieldUpdateOperationsInput | boolean
    status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    change_passowrd?: BoolFieldUpdateOperationsInput | boolean
    status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name: string
    password: string
    change_passowrd?: boolean
    status?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    change_passowrd?: BoolFieldUpdateOperationsInput | boolean
    status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    change_passowrd?: BoolFieldUpdateOperationsInput | boolean
    status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type transactionCreateInput = {
    id?: string
    name: string
    type: $Enums.TransactionType
    amount: Decimal | DecimalJsLike | number | string
    date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    transaction_category: transaction_categoryCreateNestedOneWithoutTransactionInput
    payment_method: transaction_payment_methodCreateNestedOneWithoutTransactionInput
  }

  export type transactionUncheckedCreateInput = {
    id?: string
    name: string
    type: $Enums.TransactionType
    amount: Decimal | DecimalJsLike | number | string
    date: Date | string
    category_id: string
    payment_method_id: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type transactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transaction_category?: transaction_categoryUpdateOneRequiredWithoutTransactionNestedInput
    payment_method?: transaction_payment_methodUpdateOneRequiredWithoutTransactionNestedInput
  }

  export type transactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    category_id?: StringFieldUpdateOperationsInput | string
    payment_method_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type transactionCreateManyInput = {
    id?: string
    name: string
    type: $Enums.TransactionType
    amount: Decimal | DecimalJsLike | number | string
    date: Date | string
    category_id: string
    payment_method_id: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type transactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type transactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    category_id?: StringFieldUpdateOperationsInput | string
    payment_method_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type transaction_categoryCreateInput = {
    id?: string
    name: string
    status?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    transaction?: transactionCreateNestedManyWithoutTransaction_categoryInput
  }

  export type transaction_categoryUncheckedCreateInput = {
    id?: string
    name: string
    status?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    transaction?: transactionUncheckedCreateNestedManyWithoutTransaction_categoryInput
  }

  export type transaction_categoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transaction?: transactionUpdateManyWithoutTransaction_categoryNestedInput
  }

  export type transaction_categoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transaction?: transactionUncheckedUpdateManyWithoutTransaction_categoryNestedInput
  }

  export type transaction_categoryCreateManyInput = {
    id?: string
    name: string
    status?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type transaction_categoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type transaction_categoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type transaction_payment_methodCreateInput = {
    id?: string
    name: string
    status?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    transaction?: transactionCreateNestedManyWithoutPayment_methodInput
  }

  export type transaction_payment_methodUncheckedCreateInput = {
    id?: string
    name: string
    status?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    transaction?: transactionUncheckedCreateNestedManyWithoutPayment_methodInput
  }

  export type transaction_payment_methodUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transaction?: transactionUpdateManyWithoutPayment_methodNestedInput
  }

  export type transaction_payment_methodUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transaction?: transactionUncheckedUpdateManyWithoutPayment_methodNestedInput
  }

  export type transaction_payment_methodCreateManyInput = {
    id?: string
    name: string
    status?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type transaction_payment_methodUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type transaction_payment_methodUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    change_passowrd?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    change_passowrd?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    change_passowrd?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type Transaction_categoryScalarRelationFilter = {
    is?: transaction_categoryWhereInput
    isNot?: transaction_categoryWhereInput
  }

  export type Transaction_payment_methodScalarRelationFilter = {
    is?: transaction_payment_methodWhereInput
    isNot?: transaction_payment_methodWhereInput
  }

  export type transactionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    category_id?: SortOrder
    payment_method_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type transactionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type transactionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    category_id?: SortOrder
    payment_method_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type transactionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    category_id?: SortOrder
    payment_method_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type transactionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type TransactionListRelationFilter = {
    every?: transactionWhereInput
    some?: transactionWhereInput
    none?: transactionWhereInput
  }

  export type transactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type transaction_categoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type transaction_categoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type transaction_categoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type transaction_payment_methodCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type transaction_payment_methodMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type transaction_payment_methodMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type transaction_categoryCreateNestedOneWithoutTransactionInput = {
    create?: XOR<transaction_categoryCreateWithoutTransactionInput, transaction_categoryUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: transaction_categoryCreateOrConnectWithoutTransactionInput
    connect?: transaction_categoryWhereUniqueInput
  }

  export type transaction_payment_methodCreateNestedOneWithoutTransactionInput = {
    create?: XOR<transaction_payment_methodCreateWithoutTransactionInput, transaction_payment_methodUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: transaction_payment_methodCreateOrConnectWithoutTransactionInput
    connect?: transaction_payment_methodWhereUniqueInput
  }

  export type EnumTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.TransactionType
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type transaction_categoryUpdateOneRequiredWithoutTransactionNestedInput = {
    create?: XOR<transaction_categoryCreateWithoutTransactionInput, transaction_categoryUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: transaction_categoryCreateOrConnectWithoutTransactionInput
    upsert?: transaction_categoryUpsertWithoutTransactionInput
    connect?: transaction_categoryWhereUniqueInput
    update?: XOR<XOR<transaction_categoryUpdateToOneWithWhereWithoutTransactionInput, transaction_categoryUpdateWithoutTransactionInput>, transaction_categoryUncheckedUpdateWithoutTransactionInput>
  }

  export type transaction_payment_methodUpdateOneRequiredWithoutTransactionNestedInput = {
    create?: XOR<transaction_payment_methodCreateWithoutTransactionInput, transaction_payment_methodUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: transaction_payment_methodCreateOrConnectWithoutTransactionInput
    upsert?: transaction_payment_methodUpsertWithoutTransactionInput
    connect?: transaction_payment_methodWhereUniqueInput
    update?: XOR<XOR<transaction_payment_methodUpdateToOneWithWhereWithoutTransactionInput, transaction_payment_methodUpdateWithoutTransactionInput>, transaction_payment_methodUncheckedUpdateWithoutTransactionInput>
  }

  export type transactionCreateNestedManyWithoutTransaction_categoryInput = {
    create?: XOR<transactionCreateWithoutTransaction_categoryInput, transactionUncheckedCreateWithoutTransaction_categoryInput> | transactionCreateWithoutTransaction_categoryInput[] | transactionUncheckedCreateWithoutTransaction_categoryInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutTransaction_categoryInput | transactionCreateOrConnectWithoutTransaction_categoryInput[]
    createMany?: transactionCreateManyTransaction_categoryInputEnvelope
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
  }

  export type transactionUncheckedCreateNestedManyWithoutTransaction_categoryInput = {
    create?: XOR<transactionCreateWithoutTransaction_categoryInput, transactionUncheckedCreateWithoutTransaction_categoryInput> | transactionCreateWithoutTransaction_categoryInput[] | transactionUncheckedCreateWithoutTransaction_categoryInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutTransaction_categoryInput | transactionCreateOrConnectWithoutTransaction_categoryInput[]
    createMany?: transactionCreateManyTransaction_categoryInputEnvelope
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
  }

  export type transactionUpdateManyWithoutTransaction_categoryNestedInput = {
    create?: XOR<transactionCreateWithoutTransaction_categoryInput, transactionUncheckedCreateWithoutTransaction_categoryInput> | transactionCreateWithoutTransaction_categoryInput[] | transactionUncheckedCreateWithoutTransaction_categoryInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutTransaction_categoryInput | transactionCreateOrConnectWithoutTransaction_categoryInput[]
    upsert?: transactionUpsertWithWhereUniqueWithoutTransaction_categoryInput | transactionUpsertWithWhereUniqueWithoutTransaction_categoryInput[]
    createMany?: transactionCreateManyTransaction_categoryInputEnvelope
    set?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    disconnect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    delete?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    update?: transactionUpdateWithWhereUniqueWithoutTransaction_categoryInput | transactionUpdateWithWhereUniqueWithoutTransaction_categoryInput[]
    updateMany?: transactionUpdateManyWithWhereWithoutTransaction_categoryInput | transactionUpdateManyWithWhereWithoutTransaction_categoryInput[]
    deleteMany?: transactionScalarWhereInput | transactionScalarWhereInput[]
  }

  export type transactionUncheckedUpdateManyWithoutTransaction_categoryNestedInput = {
    create?: XOR<transactionCreateWithoutTransaction_categoryInput, transactionUncheckedCreateWithoutTransaction_categoryInput> | transactionCreateWithoutTransaction_categoryInput[] | transactionUncheckedCreateWithoutTransaction_categoryInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutTransaction_categoryInput | transactionCreateOrConnectWithoutTransaction_categoryInput[]
    upsert?: transactionUpsertWithWhereUniqueWithoutTransaction_categoryInput | transactionUpsertWithWhereUniqueWithoutTransaction_categoryInput[]
    createMany?: transactionCreateManyTransaction_categoryInputEnvelope
    set?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    disconnect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    delete?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    update?: transactionUpdateWithWhereUniqueWithoutTransaction_categoryInput | transactionUpdateWithWhereUniqueWithoutTransaction_categoryInput[]
    updateMany?: transactionUpdateManyWithWhereWithoutTransaction_categoryInput | transactionUpdateManyWithWhereWithoutTransaction_categoryInput[]
    deleteMany?: transactionScalarWhereInput | transactionScalarWhereInput[]
  }

  export type transactionCreateNestedManyWithoutPayment_methodInput = {
    create?: XOR<transactionCreateWithoutPayment_methodInput, transactionUncheckedCreateWithoutPayment_methodInput> | transactionCreateWithoutPayment_methodInput[] | transactionUncheckedCreateWithoutPayment_methodInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutPayment_methodInput | transactionCreateOrConnectWithoutPayment_methodInput[]
    createMany?: transactionCreateManyPayment_methodInputEnvelope
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
  }

  export type transactionUncheckedCreateNestedManyWithoutPayment_methodInput = {
    create?: XOR<transactionCreateWithoutPayment_methodInput, transactionUncheckedCreateWithoutPayment_methodInput> | transactionCreateWithoutPayment_methodInput[] | transactionUncheckedCreateWithoutPayment_methodInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutPayment_methodInput | transactionCreateOrConnectWithoutPayment_methodInput[]
    createMany?: transactionCreateManyPayment_methodInputEnvelope
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
  }

  export type transactionUpdateManyWithoutPayment_methodNestedInput = {
    create?: XOR<transactionCreateWithoutPayment_methodInput, transactionUncheckedCreateWithoutPayment_methodInput> | transactionCreateWithoutPayment_methodInput[] | transactionUncheckedCreateWithoutPayment_methodInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutPayment_methodInput | transactionCreateOrConnectWithoutPayment_methodInput[]
    upsert?: transactionUpsertWithWhereUniqueWithoutPayment_methodInput | transactionUpsertWithWhereUniqueWithoutPayment_methodInput[]
    createMany?: transactionCreateManyPayment_methodInputEnvelope
    set?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    disconnect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    delete?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    update?: transactionUpdateWithWhereUniqueWithoutPayment_methodInput | transactionUpdateWithWhereUniqueWithoutPayment_methodInput[]
    updateMany?: transactionUpdateManyWithWhereWithoutPayment_methodInput | transactionUpdateManyWithWhereWithoutPayment_methodInput[]
    deleteMany?: transactionScalarWhereInput | transactionScalarWhereInput[]
  }

  export type transactionUncheckedUpdateManyWithoutPayment_methodNestedInput = {
    create?: XOR<transactionCreateWithoutPayment_methodInput, transactionUncheckedCreateWithoutPayment_methodInput> | transactionCreateWithoutPayment_methodInput[] | transactionUncheckedCreateWithoutPayment_methodInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutPayment_methodInput | transactionCreateOrConnectWithoutPayment_methodInput[]
    upsert?: transactionUpsertWithWhereUniqueWithoutPayment_methodInput | transactionUpsertWithWhereUniqueWithoutPayment_methodInput[]
    createMany?: transactionCreateManyPayment_methodInputEnvelope
    set?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    disconnect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    delete?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    update?: transactionUpdateWithWhereUniqueWithoutPayment_methodInput | transactionUpdateWithWhereUniqueWithoutPayment_methodInput[]
    updateMany?: transactionUpdateManyWithWhereWithoutPayment_methodInput | transactionUpdateManyWithWhereWithoutPayment_methodInput[]
    deleteMany?: transactionScalarWhereInput | transactionScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type transaction_categoryCreateWithoutTransactionInput = {
    id?: string
    name: string
    status?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type transaction_categoryUncheckedCreateWithoutTransactionInput = {
    id?: string
    name: string
    status?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type transaction_categoryCreateOrConnectWithoutTransactionInput = {
    where: transaction_categoryWhereUniqueInput
    create: XOR<transaction_categoryCreateWithoutTransactionInput, transaction_categoryUncheckedCreateWithoutTransactionInput>
  }

  export type transaction_payment_methodCreateWithoutTransactionInput = {
    id?: string
    name: string
    status?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type transaction_payment_methodUncheckedCreateWithoutTransactionInput = {
    id?: string
    name: string
    status?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type transaction_payment_methodCreateOrConnectWithoutTransactionInput = {
    where: transaction_payment_methodWhereUniqueInput
    create: XOR<transaction_payment_methodCreateWithoutTransactionInput, transaction_payment_methodUncheckedCreateWithoutTransactionInput>
  }

  export type transaction_categoryUpsertWithoutTransactionInput = {
    update: XOR<transaction_categoryUpdateWithoutTransactionInput, transaction_categoryUncheckedUpdateWithoutTransactionInput>
    create: XOR<transaction_categoryCreateWithoutTransactionInput, transaction_categoryUncheckedCreateWithoutTransactionInput>
    where?: transaction_categoryWhereInput
  }

  export type transaction_categoryUpdateToOneWithWhereWithoutTransactionInput = {
    where?: transaction_categoryWhereInput
    data: XOR<transaction_categoryUpdateWithoutTransactionInput, transaction_categoryUncheckedUpdateWithoutTransactionInput>
  }

  export type transaction_categoryUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type transaction_categoryUncheckedUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type transaction_payment_methodUpsertWithoutTransactionInput = {
    update: XOR<transaction_payment_methodUpdateWithoutTransactionInput, transaction_payment_methodUncheckedUpdateWithoutTransactionInput>
    create: XOR<transaction_payment_methodCreateWithoutTransactionInput, transaction_payment_methodUncheckedCreateWithoutTransactionInput>
    where?: transaction_payment_methodWhereInput
  }

  export type transaction_payment_methodUpdateToOneWithWhereWithoutTransactionInput = {
    where?: transaction_payment_methodWhereInput
    data: XOR<transaction_payment_methodUpdateWithoutTransactionInput, transaction_payment_methodUncheckedUpdateWithoutTransactionInput>
  }

  export type transaction_payment_methodUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type transaction_payment_methodUncheckedUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type transactionCreateWithoutTransaction_categoryInput = {
    id?: string
    name: string
    type: $Enums.TransactionType
    amount: Decimal | DecimalJsLike | number | string
    date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    payment_method: transaction_payment_methodCreateNestedOneWithoutTransactionInput
  }

  export type transactionUncheckedCreateWithoutTransaction_categoryInput = {
    id?: string
    name: string
    type: $Enums.TransactionType
    amount: Decimal | DecimalJsLike | number | string
    date: Date | string
    payment_method_id: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type transactionCreateOrConnectWithoutTransaction_categoryInput = {
    where: transactionWhereUniqueInput
    create: XOR<transactionCreateWithoutTransaction_categoryInput, transactionUncheckedCreateWithoutTransaction_categoryInput>
  }

  export type transactionCreateManyTransaction_categoryInputEnvelope = {
    data: transactionCreateManyTransaction_categoryInput | transactionCreateManyTransaction_categoryInput[]
    skipDuplicates?: boolean
  }

  export type transactionUpsertWithWhereUniqueWithoutTransaction_categoryInput = {
    where: transactionWhereUniqueInput
    update: XOR<transactionUpdateWithoutTransaction_categoryInput, transactionUncheckedUpdateWithoutTransaction_categoryInput>
    create: XOR<transactionCreateWithoutTransaction_categoryInput, transactionUncheckedCreateWithoutTransaction_categoryInput>
  }

  export type transactionUpdateWithWhereUniqueWithoutTransaction_categoryInput = {
    where: transactionWhereUniqueInput
    data: XOR<transactionUpdateWithoutTransaction_categoryInput, transactionUncheckedUpdateWithoutTransaction_categoryInput>
  }

  export type transactionUpdateManyWithWhereWithoutTransaction_categoryInput = {
    where: transactionScalarWhereInput
    data: XOR<transactionUpdateManyMutationInput, transactionUncheckedUpdateManyWithoutTransaction_categoryInput>
  }

  export type transactionScalarWhereInput = {
    AND?: transactionScalarWhereInput | transactionScalarWhereInput[]
    OR?: transactionScalarWhereInput[]
    NOT?: transactionScalarWhereInput | transactionScalarWhereInput[]
    id?: StringFilter<"transaction"> | string
    name?: StringFilter<"transaction"> | string
    type?: EnumTransactionTypeFilter<"transaction"> | $Enums.TransactionType
    amount?: DecimalFilter<"transaction"> | Decimal | DecimalJsLike | number | string
    date?: DateTimeFilter<"transaction"> | Date | string
    category_id?: StringFilter<"transaction"> | string
    payment_method_id?: StringFilter<"transaction"> | string
    created_at?: DateTimeFilter<"transaction"> | Date | string
    updated_at?: DateTimeFilter<"transaction"> | Date | string
    deleted_at?: DateTimeNullableFilter<"transaction"> | Date | string | null
  }

  export type transactionCreateWithoutPayment_methodInput = {
    id?: string
    name: string
    type: $Enums.TransactionType
    amount: Decimal | DecimalJsLike | number | string
    date: Date | string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
    transaction_category: transaction_categoryCreateNestedOneWithoutTransactionInput
  }

  export type transactionUncheckedCreateWithoutPayment_methodInput = {
    id?: string
    name: string
    type: $Enums.TransactionType
    amount: Decimal | DecimalJsLike | number | string
    date: Date | string
    category_id: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type transactionCreateOrConnectWithoutPayment_methodInput = {
    where: transactionWhereUniqueInput
    create: XOR<transactionCreateWithoutPayment_methodInput, transactionUncheckedCreateWithoutPayment_methodInput>
  }

  export type transactionCreateManyPayment_methodInputEnvelope = {
    data: transactionCreateManyPayment_methodInput | transactionCreateManyPayment_methodInput[]
    skipDuplicates?: boolean
  }

  export type transactionUpsertWithWhereUniqueWithoutPayment_methodInput = {
    where: transactionWhereUniqueInput
    update: XOR<transactionUpdateWithoutPayment_methodInput, transactionUncheckedUpdateWithoutPayment_methodInput>
    create: XOR<transactionCreateWithoutPayment_methodInput, transactionUncheckedCreateWithoutPayment_methodInput>
  }

  export type transactionUpdateWithWhereUniqueWithoutPayment_methodInput = {
    where: transactionWhereUniqueInput
    data: XOR<transactionUpdateWithoutPayment_methodInput, transactionUncheckedUpdateWithoutPayment_methodInput>
  }

  export type transactionUpdateManyWithWhereWithoutPayment_methodInput = {
    where: transactionScalarWhereInput
    data: XOR<transactionUpdateManyMutationInput, transactionUncheckedUpdateManyWithoutPayment_methodInput>
  }

  export type transactionCreateManyTransaction_categoryInput = {
    id?: string
    name: string
    type: $Enums.TransactionType
    amount: Decimal | DecimalJsLike | number | string
    date: Date | string
    payment_method_id: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type transactionUpdateWithoutTransaction_categoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment_method?: transaction_payment_methodUpdateOneRequiredWithoutTransactionNestedInput
  }

  export type transactionUncheckedUpdateWithoutTransaction_categoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_method_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type transactionUncheckedUpdateManyWithoutTransaction_categoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_method_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type transactionCreateManyPayment_methodInput = {
    id?: string
    name: string
    type: $Enums.TransactionType
    amount: Decimal | DecimalJsLike | number | string
    date: Date | string
    category_id: string
    created_at?: Date | string
    updated_at?: Date | string
    deleted_at?: Date | string | null
  }

  export type transactionUpdateWithoutPayment_methodInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    transaction_category?: transaction_categoryUpdateOneRequiredWithoutTransactionNestedInput
  }

  export type transactionUncheckedUpdateWithoutPayment_methodInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    category_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type transactionUncheckedUpdateManyWithoutPayment_methodInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    category_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}