/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model collection
 *
 */
export type collection = $Result.DefaultSelection<Prisma.$collectionPayload>;
/**
 * Model collection_card
 *
 */
export type collection_card = $Result.DefaultSelection<Prisma.$collection_cardPayload>;
/**
 * Model company
 *
 */
export type company = $Result.DefaultSelection<Prisma.$companyPayload>;
/**
 * Model game_card
 *
 */
export type game_card = $Result.DefaultSelection<Prisma.$game_cardPayload>;
/**
 * Model transaction
 *
 */
export type transaction = $Result.DefaultSelection<Prisma.$transactionPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Collections
 * const collections = await prisma.collection.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Collections
   * const collections = await prisma.collection.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

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
  $use(cb: Prisma.Middleware): void;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.collection`: Exposes CRUD operations for the **collection** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Collections
   * const collections = await prisma.collection.findMany()
   * ```
   */
  get collection(): Prisma.collectionDelegate<ExtArgs>;

  /**
   * `prisma.collection_card`: Exposes CRUD operations for the **collection_card** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Collection_cards
   * const collection_cards = await prisma.collection_card.findMany()
   * ```
   */
  get collection_card(): Prisma.collection_cardDelegate<ExtArgs>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **company** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   */
  get company(): Prisma.companyDelegate<ExtArgs>;

  /**
   * `prisma.game_card`: Exposes CRUD operations for the **game_card** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Game_cards
   * const game_cards = await prisma.game_card.findMany()
   * ```
   */
  get game_card(): Prisma.game_cardDelegate<ExtArgs>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **transaction** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Transactions
   * const transactions = await prisma.transaction.findMany()
   * ```
   */
  get transaction(): Prisma.transactionDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

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
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    collection: 'collection';
    collection_card: 'collection_card';
    company: 'company';
    game_card: 'game_card';
    transaction: 'transaction';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'collection' | 'collection_card' | 'company' | 'game_card' | 'transaction' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      collection: {
        payload: Prisma.$collectionPayload<ExtArgs>;
        fields: Prisma.collectionFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.collectionFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$collectionPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.collectionFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$collectionPayload>;
          };
          findFirst: {
            args: Prisma.collectionFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$collectionPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.collectionFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$collectionPayload>;
          };
          findMany: {
            args: Prisma.collectionFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$collectionPayload>[];
          };
          create: {
            args: Prisma.collectionCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$collectionPayload>;
          };
          createMany: {
            args: Prisma.collectionCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.collectionDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$collectionPayload>;
          };
          update: {
            args: Prisma.collectionUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$collectionPayload>;
          };
          deleteMany: {
            args: Prisma.collectionDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.collectionUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.collectionUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$collectionPayload>;
          };
          aggregate: {
            args: Prisma.CollectionAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCollection>;
          };
          groupBy: {
            args: Prisma.collectionGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CollectionGroupByOutputType>[];
          };
          count: {
            args: Prisma.collectionCountArgs<ExtArgs>;
            result: $Utils.Optional<CollectionCountAggregateOutputType> | number;
          };
        };
      };
      collection_card: {
        payload: Prisma.$collection_cardPayload<ExtArgs>;
        fields: Prisma.collection_cardFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.collection_cardFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$collection_cardPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.collection_cardFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$collection_cardPayload>;
          };
          findFirst: {
            args: Prisma.collection_cardFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$collection_cardPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.collection_cardFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$collection_cardPayload>;
          };
          findMany: {
            args: Prisma.collection_cardFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$collection_cardPayload>[];
          };
          create: {
            args: Prisma.collection_cardCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$collection_cardPayload>;
          };
          createMany: {
            args: Prisma.collection_cardCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.collection_cardDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$collection_cardPayload>;
          };
          update: {
            args: Prisma.collection_cardUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$collection_cardPayload>;
          };
          deleteMany: {
            args: Prisma.collection_cardDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.collection_cardUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.collection_cardUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$collection_cardPayload>;
          };
          aggregate: {
            args: Prisma.Collection_cardAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCollection_card>;
          };
          groupBy: {
            args: Prisma.collection_cardGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Collection_cardGroupByOutputType>[];
          };
          count: {
            args: Prisma.collection_cardCountArgs<ExtArgs>;
            result: $Utils.Optional<Collection_cardCountAggregateOutputType> | number;
          };
        };
      };
      company: {
        payload: Prisma.$companyPayload<ExtArgs>;
        fields: Prisma.companyFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.companyFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.companyFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findFirst: {
            args: Prisma.companyFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.companyFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findMany: {
            args: Prisma.companyFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[];
          };
          create: {
            args: Prisma.companyCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          createMany: {
            args: Prisma.companyCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.companyDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          update: {
            args: Prisma.companyUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          deleteMany: {
            args: Prisma.companyDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.companyUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.companyUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCompany>;
          };
          groupBy: {
            args: Prisma.companyGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CompanyGroupByOutputType>[];
          };
          count: {
            args: Prisma.companyCountArgs<ExtArgs>;
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number;
          };
        };
      };
      game_card: {
        payload: Prisma.$game_cardPayload<ExtArgs>;
        fields: Prisma.game_cardFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.game_cardFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$game_cardPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.game_cardFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$game_cardPayload>;
          };
          findFirst: {
            args: Prisma.game_cardFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$game_cardPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.game_cardFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$game_cardPayload>;
          };
          findMany: {
            args: Prisma.game_cardFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$game_cardPayload>[];
          };
          create: {
            args: Prisma.game_cardCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$game_cardPayload>;
          };
          createMany: {
            args: Prisma.game_cardCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.game_cardDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$game_cardPayload>;
          };
          update: {
            args: Prisma.game_cardUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$game_cardPayload>;
          };
          deleteMany: {
            args: Prisma.game_cardDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.game_cardUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.game_cardUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$game_cardPayload>;
          };
          aggregate: {
            args: Prisma.Game_cardAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateGame_card>;
          };
          groupBy: {
            args: Prisma.game_cardGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Game_cardGroupByOutputType>[];
          };
          count: {
            args: Prisma.game_cardCountArgs<ExtArgs>;
            result: $Utils.Optional<Game_cardCountAggregateOutputType> | number;
          };
        };
      };
      transaction: {
        payload: Prisma.$transactionPayload<ExtArgs>;
        fields: Prisma.transactionFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.transactionFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$transactionPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.transactionFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>;
          };
          findFirst: {
            args: Prisma.transactionFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$transactionPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.transactionFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>;
          };
          findMany: {
            args: Prisma.transactionFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>[];
          };
          create: {
            args: Prisma.transactionCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>;
          };
          createMany: {
            args: Prisma.transactionCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.transactionDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>;
          };
          update: {
            args: Prisma.transactionUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>;
          };
          deleteMany: {
            args: Prisma.transactionDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.transactionUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.transactionUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>;
          };
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTransaction>;
          };
          groupBy: {
            args: Prisma.transactionGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TransactionGroupByOutputType>[];
          };
          count: {
            args: Prisma.transactionCountArgs<ExtArgs>;
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
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
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type CollectionCountOutputType
   */

  export type CollectionCountOutputType = {
    collection_card: number;
  };

  export type CollectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collection_card?: boolean | CollectionCountOutputTypeCountCollection_cardArgs;
  };

  // Custom InputTypes

  /**
   * CollectionCountOutputType without action
   */
  export type CollectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the CollectionCountOutputType
       */
      select?: CollectionCountOutputTypeSelect<ExtArgs> | null;
    };

  /**
   * CollectionCountOutputType without action
   */
  export type CollectionCountOutputTypeCountCollection_cardArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: collection_cardWhereInput;
  };

  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    game_card: number;
  };

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game_card?: boolean | CompanyCountOutputTypeCountGame_cardArgs;
  };

  // Custom InputTypes

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountGame_cardArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: game_cardWhereInput;
  };

  /**
   * Count Type Game_cardCountOutputType
   */

  export type Game_cardCountOutputType = {
    collection_card: number;
    transaction: number;
  };

  export type Game_cardCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collection_card?: boolean | Game_cardCountOutputTypeCountCollection_cardArgs;
    transaction?: boolean | Game_cardCountOutputTypeCountTransactionArgs;
  };

  // Custom InputTypes

  /**
   * Game_cardCountOutputType without action
   */
  export type Game_cardCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the Game_cardCountOutputType
       */
      select?: Game_cardCountOutputTypeSelect<ExtArgs> | null;
    };

  /**
   * Game_cardCountOutputType without action
   */
  export type Game_cardCountOutputTypeCountCollection_cardArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: collection_cardWhereInput;
  };

  /**
   * Game_cardCountOutputType without action
   */
  export type Game_cardCountOutputTypeCountTransactionArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: transactionWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    collection: number;
    collection_card: number;
    game_card: number;
    transaction: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collection?: boolean | UserCountOutputTypeCountCollectionArgs;
    collection_card?: boolean | UserCountOutputTypeCountCollection_cardArgs;
    game_card?: boolean | UserCountOutputTypeCountGame_cardArgs;
    transaction?: boolean | UserCountOutputTypeCountTransactionArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCollectionArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: collectionWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCollection_cardArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: collection_cardWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGame_cardArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: game_cardWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransactionArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: transactionWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model collection
   */

  export type AggregateCollection = {
    _count: CollectionCountAggregateOutputType | null;
    _avg: CollectionAvgAggregateOutputType | null;
    _sum: CollectionSumAggregateOutputType | null;
    _min: CollectionMinAggregateOutputType | null;
    _max: CollectionMaxAggregateOutputType | null;
  };

  export type CollectionAvgAggregateOutputType = {
    total_cards: number | null;
    total_value: number | null;
    average_rating: number | null;
  };

  export type CollectionSumAggregateOutputType = {
    total_cards: number | null;
    total_value: number | null;
    average_rating: number | null;
  };

  export type CollectionMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    user_id: string | null;
    total_cards: number | null;
    total_value: number | null;
    average_rating: number | null;
    last_updated_card: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CollectionMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    user_id: string | null;
    total_cards: number | null;
    total_value: number | null;
    average_rating: number | null;
    last_updated_card: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CollectionCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    user_id: number;
    total_cards: number;
    total_value: number;
    average_rating: number;
    last_updated_card: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type CollectionAvgAggregateInputType = {
    total_cards?: true;
    total_value?: true;
    average_rating?: true;
  };

  export type CollectionSumAggregateInputType = {
    total_cards?: true;
    total_value?: true;
    average_rating?: true;
  };

  export type CollectionMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    user_id?: true;
    total_cards?: true;
    total_value?: true;
    average_rating?: true;
    last_updated_card?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CollectionMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    user_id?: true;
    total_cards?: true;
    total_value?: true;
    average_rating?: true;
    last_updated_card?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CollectionCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    user_id?: true;
    total_cards?: true;
    total_value?: true;
    average_rating?: true;
    last_updated_card?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type CollectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which collection to aggregate.
     */
    where?: collectionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of collections to fetch.
     */
    orderBy?: collectionOrderByWithRelationInput | collectionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: collectionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` collections from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` collections.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned collections
     **/
    _count?: true | CollectionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: CollectionAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: CollectionSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CollectionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CollectionMaxAggregateInputType;
  };

  export type GetCollectionAggregateType<T extends CollectionAggregateArgs> = {
    [P in keyof T & keyof AggregateCollection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollection[P]>
      : GetScalarType<T[P], AggregateCollection[P]>;
  };

  export type collectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: collectionWhereInput;
    orderBy?: collectionOrderByWithAggregationInput | collectionOrderByWithAggregationInput[];
    by: CollectionScalarFieldEnum[] | CollectionScalarFieldEnum;
    having?: collectionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CollectionCountAggregateInputType | true;
    _avg?: CollectionAvgAggregateInputType;
    _sum?: CollectionSumAggregateInputType;
    _min?: CollectionMinAggregateInputType;
    _max?: CollectionMaxAggregateInputType;
  };

  export type CollectionGroupByOutputType = {
    id: string;
    name: string;
    description: string | null;
    user_id: string;
    total_cards: number | null;
    total_value: number | null;
    average_rating: number | null;
    last_updated_card: Date | null;
    created_at: Date;
    updated_at: Date;
    _count: CollectionCountAggregateOutputType | null;
    _avg: CollectionAvgAggregateOutputType | null;
    _sum: CollectionSumAggregateOutputType | null;
    _min: CollectionMinAggregateOutputType | null;
    _max: CollectionMaxAggregateOutputType | null;
  };

  type GetCollectionGroupByPayload<T extends collectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CollectionGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CollectionGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CollectionGroupByOutputType[P]>
          : GetScalarType<T[P], CollectionGroupByOutputType[P]>;
      }
    >
  >;

  export type collectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        name?: boolean;
        description?: boolean;
        user_id?: boolean;
        total_cards?: boolean;
        total_value?: boolean;
        average_rating?: boolean;
        last_updated_card?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user?: boolean | userDefaultArgs<ExtArgs>;
        collection_card?: boolean | collection$collection_cardArgs<ExtArgs>;
        _count?: boolean | CollectionCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['collection']
    >;

  export type collectionSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    user_id?: boolean;
    total_cards?: boolean;
    total_value?: boolean;
    average_rating?: boolean;
    last_updated_card?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type collectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
    collection_card?: boolean | collection$collection_cardArgs<ExtArgs>;
    _count?: boolean | CollectionCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $collectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'collection';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
      collection_card: Prisma.$collection_cardPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        description: string | null;
        user_id: string;
        total_cards: number | null;
        total_value: number | null;
        average_rating: number | null;
        last_updated_card: Date | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['collection']
    >;
    composites: {};
  };

  type collectionGetPayload<S extends boolean | null | undefined | collectionDefaultArgs> = $Result.GetResult<
    Prisma.$collectionPayload,
    S
  >;

  type collectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    collectionFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: CollectionCountAggregateInputType | true;
  };

  export interface collectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['collection']; meta: { name: 'collection' } };
    /**
     * Find zero or one Collection that matches the filter.
     * @param {collectionFindUniqueArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends collectionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, collectionFindUniqueArgs<ExtArgs>>,
    ): Prisma__collectionClient<
      $Result.GetResult<Prisma.$collectionPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Collection that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {collectionFindUniqueOrThrowArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends collectionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, collectionFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__collectionClient<
      $Result.GetResult<Prisma.$collectionPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Collection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {collectionFindFirstArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends collectionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, collectionFindFirstArgs<ExtArgs>>,
    ): Prisma__collectionClient<
      $Result.GetResult<Prisma.$collectionPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Collection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {collectionFindFirstOrThrowArgs} args - Arguments to find a Collection
     * @example
     * // Get one Collection
     * const collection = await prisma.collection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends collectionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, collectionFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__collectionClient<
      $Result.GetResult<Prisma.$collectionPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Collections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {collectionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Collections
     * const collections = await prisma.collection.findMany()
     *
     * // Get first 10 Collections
     * const collections = await prisma.collection.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const collectionWithIdOnly = await prisma.collection.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends collectionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, collectionFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$collectionPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Collection.
     * @param {collectionCreateArgs} args - Arguments to create a Collection.
     * @example
     * // Create one Collection
     * const Collection = await prisma.collection.create({
     *   data: {
     *     // ... data to create a Collection
     *   }
     * })
     *
     **/
    create<T extends collectionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, collectionCreateArgs<ExtArgs>>,
    ): Prisma__collectionClient<$Result.GetResult<Prisma.$collectionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Collections.
     *     @param {collectionCreateManyArgs} args - Arguments to create many Collections.
     *     @example
     *     // Create many Collections
     *     const collection = await prisma.collection.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends collectionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, collectionCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Collection.
     * @param {collectionDeleteArgs} args - Arguments to delete one Collection.
     * @example
     * // Delete one Collection
     * const Collection = await prisma.collection.delete({
     *   where: {
     *     // ... filter to delete one Collection
     *   }
     * })
     *
     **/
    delete<T extends collectionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, collectionDeleteArgs<ExtArgs>>,
    ): Prisma__collectionClient<$Result.GetResult<Prisma.$collectionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Collection.
     * @param {collectionUpdateArgs} args - Arguments to update one Collection.
     * @example
     * // Update one Collection
     * const collection = await prisma.collection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends collectionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, collectionUpdateArgs<ExtArgs>>,
    ): Prisma__collectionClient<$Result.GetResult<Prisma.$collectionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Collections.
     * @param {collectionDeleteManyArgs} args - Arguments to filter Collections to delete.
     * @example
     * // Delete a few Collections
     * const { count } = await prisma.collection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends collectionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, collectionDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Collections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {collectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Collections
     * const collection = await prisma.collection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends collectionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, collectionUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Collection.
     * @param {collectionUpsertArgs} args - Arguments to update or create a Collection.
     * @example
     * // Update or create a Collection
     * const collection = await prisma.collection.upsert({
     *   create: {
     *     // ... data to create a Collection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Collection we want to update
     *   }
     * })
     **/
    upsert<T extends collectionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, collectionUpsertArgs<ExtArgs>>,
    ): Prisma__collectionClient<$Result.GetResult<Prisma.$collectionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Collections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {collectionCountArgs} args - Arguments to filter Collections to count.
     * @example
     * // Count the number of Collections
     * const count = await prisma.collection.count({
     *   where: {
     *     // ... the filter for the Collections we want to count
     *   }
     * })
     **/
    count<T extends collectionCountArgs>(
      args?: Subset<T, collectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CollectionCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Collection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CollectionAggregateArgs>(
      args: Subset<T, CollectionAggregateArgs>,
    ): Prisma.PrismaPromise<GetCollectionAggregateType<T>>;

    /**
     * Group by Collection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {collectionGroupByArgs} args - Group by arguments.
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
      T extends collectionGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: collectionGroupByArgs['orderBy'] }
        : { orderBy?: collectionGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, collectionGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCollectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the collection model
     */
    readonly fields: collectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for collection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__collectionClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    collection_card<T extends collection$collection_cardArgs<ExtArgs> = {}>(
      args?: Subset<T, collection$collection_cardArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$collection_cardPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the collection model
   */
  interface collectionFieldRefs {
    readonly id: FieldRef<'collection', 'String'>;
    readonly name: FieldRef<'collection', 'String'>;
    readonly description: FieldRef<'collection', 'String'>;
    readonly user_id: FieldRef<'collection', 'String'>;
    readonly total_cards: FieldRef<'collection', 'Int'>;
    readonly total_value: FieldRef<'collection', 'Int'>;
    readonly average_rating: FieldRef<'collection', 'Int'>;
    readonly last_updated_card: FieldRef<'collection', 'DateTime'>;
    readonly created_at: FieldRef<'collection', 'DateTime'>;
    readonly updated_at: FieldRef<'collection', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * collection findUnique
   */
  export type collectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collection
     */
    select?: collectionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: collectionInclude<ExtArgs> | null;
    /**
     * Filter, which collection to fetch.
     */
    where: collectionWhereUniqueInput;
  };

  /**
   * collection findUniqueOrThrow
   */
  export type collectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collection
     */
    select?: collectionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: collectionInclude<ExtArgs> | null;
    /**
     * Filter, which collection to fetch.
     */
    where: collectionWhereUniqueInput;
  };

  /**
   * collection findFirst
   */
  export type collectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collection
     */
    select?: collectionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: collectionInclude<ExtArgs> | null;
    /**
     * Filter, which collection to fetch.
     */
    where?: collectionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of collections to fetch.
     */
    orderBy?: collectionOrderByWithRelationInput | collectionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for collections.
     */
    cursor?: collectionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` collections from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` collections.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of collections.
     */
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[];
  };

  /**
   * collection findFirstOrThrow
   */
  export type collectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collection
     */
    select?: collectionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: collectionInclude<ExtArgs> | null;
    /**
     * Filter, which collection to fetch.
     */
    where?: collectionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of collections to fetch.
     */
    orderBy?: collectionOrderByWithRelationInput | collectionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for collections.
     */
    cursor?: collectionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` collections from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` collections.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of collections.
     */
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[];
  };

  /**
   * collection findMany
   */
  export type collectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collection
     */
    select?: collectionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: collectionInclude<ExtArgs> | null;
    /**
     * Filter, which collections to fetch.
     */
    where?: collectionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of collections to fetch.
     */
    orderBy?: collectionOrderByWithRelationInput | collectionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing collections.
     */
    cursor?: collectionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` collections from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` collections.
     */
    skip?: number;
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[];
  };

  /**
   * collection create
   */
  export type collectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collection
     */
    select?: collectionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: collectionInclude<ExtArgs> | null;
    /**
     * The data needed to create a collection.
     */
    data: XOR<collectionCreateInput, collectionUncheckedCreateInput>;
  };

  /**
   * collection createMany
   */
  export type collectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many collections.
     */
    data: collectionCreateManyInput | collectionCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * collection update
   */
  export type collectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collection
     */
    select?: collectionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: collectionInclude<ExtArgs> | null;
    /**
     * The data needed to update a collection.
     */
    data: XOR<collectionUpdateInput, collectionUncheckedUpdateInput>;
    /**
     * Choose, which collection to update.
     */
    where: collectionWhereUniqueInput;
  };

  /**
   * collection updateMany
   */
  export type collectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update collections.
     */
    data: XOR<collectionUpdateManyMutationInput, collectionUncheckedUpdateManyInput>;
    /**
     * Filter which collections to update
     */
    where?: collectionWhereInput;
  };

  /**
   * collection upsert
   */
  export type collectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collection
     */
    select?: collectionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: collectionInclude<ExtArgs> | null;
    /**
     * The filter to search for the collection to update in case it exists.
     */
    where: collectionWhereUniqueInput;
    /**
     * In case the collection found by the `where` argument doesn't exist, create a new collection with this data.
     */
    create: XOR<collectionCreateInput, collectionUncheckedCreateInput>;
    /**
     * In case the collection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<collectionUpdateInput, collectionUncheckedUpdateInput>;
  };

  /**
   * collection delete
   */
  export type collectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collection
     */
    select?: collectionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: collectionInclude<ExtArgs> | null;
    /**
     * Filter which collection to delete.
     */
    where: collectionWhereUniqueInput;
  };

  /**
   * collection deleteMany
   */
  export type collectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which collections to delete
     */
    where?: collectionWhereInput;
  };

  /**
   * collection.collection_card
   */
  export type collection$collection_cardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collection_card
     */
    select?: collection_cardSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: collection_cardInclude<ExtArgs> | null;
    where?: collection_cardWhereInput;
    orderBy?: collection_cardOrderByWithRelationInput | collection_cardOrderByWithRelationInput[];
    cursor?: collection_cardWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Collection_cardScalarFieldEnum | Collection_cardScalarFieldEnum[];
  };

  /**
   * collection without action
   */
  export type collectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collection
     */
    select?: collectionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: collectionInclude<ExtArgs> | null;
  };

  /**
   * Model collection_card
   */

  export type AggregateCollection_card = {
    _count: Collection_cardCountAggregateOutputType | null;
    _avg: Collection_cardAvgAggregateOutputType | null;
    _sum: Collection_cardSumAggregateOutputType | null;
    _min: Collection_cardMinAggregateOutputType | null;
    _max: Collection_cardMaxAggregateOutputType | null;
  };

  export type Collection_cardAvgAggregateOutputType = {
    purchase_price: number | null;
    current_value: number | null;
    rating: number | null;
  };

  export type Collection_cardSumAggregateOutputType = {
    purchase_price: number | null;
    current_value: number | null;
    rating: number | null;
  };

  export type Collection_cardMinAggregateOutputType = {
    id: string | null;
    collection_id: string | null;
    game_card_id: string | null;
    added_at: Date | null;
    user_id: string | null;
    purchase_price: number | null;
    current_value: number | null;
    condition: string | null;
    rating: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Collection_cardMaxAggregateOutputType = {
    id: string | null;
    collection_id: string | null;
    game_card_id: string | null;
    added_at: Date | null;
    user_id: string | null;
    purchase_price: number | null;
    current_value: number | null;
    condition: string | null;
    rating: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Collection_cardCountAggregateOutputType = {
    id: number;
    collection_id: number;
    game_card_id: number;
    added_at: number;
    user_id: number;
    purchase_price: number;
    current_value: number;
    condition: number;
    rating: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Collection_cardAvgAggregateInputType = {
    purchase_price?: true;
    current_value?: true;
    rating?: true;
  };

  export type Collection_cardSumAggregateInputType = {
    purchase_price?: true;
    current_value?: true;
    rating?: true;
  };

  export type Collection_cardMinAggregateInputType = {
    id?: true;
    collection_id?: true;
    game_card_id?: true;
    added_at?: true;
    user_id?: true;
    purchase_price?: true;
    current_value?: true;
    condition?: true;
    rating?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Collection_cardMaxAggregateInputType = {
    id?: true;
    collection_id?: true;
    game_card_id?: true;
    added_at?: true;
    user_id?: true;
    purchase_price?: true;
    current_value?: true;
    condition?: true;
    rating?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Collection_cardCountAggregateInputType = {
    id?: true;
    collection_id?: true;
    game_card_id?: true;
    added_at?: true;
    user_id?: true;
    purchase_price?: true;
    current_value?: true;
    condition?: true;
    rating?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Collection_cardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which collection_card to aggregate.
     */
    where?: collection_cardWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of collection_cards to fetch.
     */
    orderBy?: collection_cardOrderByWithRelationInput | collection_cardOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: collection_cardWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` collection_cards from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` collection_cards.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned collection_cards
     **/
    _count?: true | Collection_cardCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: Collection_cardAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: Collection_cardSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Collection_cardMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Collection_cardMaxAggregateInputType;
  };

  export type GetCollection_cardAggregateType<T extends Collection_cardAggregateArgs> = {
    [P in keyof T & keyof AggregateCollection_card]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollection_card[P]>
      : GetScalarType<T[P], AggregateCollection_card[P]>;
  };

  export type collection_cardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: collection_cardWhereInput;
    orderBy?: collection_cardOrderByWithAggregationInput | collection_cardOrderByWithAggregationInput[];
    by: Collection_cardScalarFieldEnum[] | Collection_cardScalarFieldEnum;
    having?: collection_cardScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Collection_cardCountAggregateInputType | true;
    _avg?: Collection_cardAvgAggregateInputType;
    _sum?: Collection_cardSumAggregateInputType;
    _min?: Collection_cardMinAggregateInputType;
    _max?: Collection_cardMaxAggregateInputType;
  };

  export type Collection_cardGroupByOutputType = {
    id: string;
    collection_id: string;
    game_card_id: string;
    added_at: Date;
    user_id: string;
    purchase_price: number | null;
    current_value: number | null;
    condition: string | null;
    rating: number | null;
    created_at: Date;
    updated_at: Date;
    _count: Collection_cardCountAggregateOutputType | null;
    _avg: Collection_cardAvgAggregateOutputType | null;
    _sum: Collection_cardSumAggregateOutputType | null;
    _min: Collection_cardMinAggregateOutputType | null;
    _max: Collection_cardMaxAggregateOutputType | null;
  };

  type GetCollection_cardGroupByPayload<T extends collection_cardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Collection_cardGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Collection_cardGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Collection_cardGroupByOutputType[P]>
          : GetScalarType<T[P], Collection_cardGroupByOutputType[P]>;
      }
    >
  >;

  export type collection_cardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        collection_id?: boolean;
        game_card_id?: boolean;
        added_at?: boolean;
        user_id?: boolean;
        purchase_price?: boolean;
        current_value?: boolean;
        condition?: boolean;
        rating?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        collection?: boolean | collectionDefaultArgs<ExtArgs>;
        game_card?: boolean | game_cardDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['collection_card']
    >;

  export type collection_cardSelectScalar = {
    id?: boolean;
    collection_id?: boolean;
    game_card_id?: boolean;
    added_at?: boolean;
    user_id?: boolean;
    purchase_price?: boolean;
    current_value?: boolean;
    condition?: boolean;
    rating?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type collection_cardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collection?: boolean | collectionDefaultArgs<ExtArgs>;
    game_card?: boolean | game_cardDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $collection_cardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'collection_card';
    objects: {
      collection: Prisma.$collectionPayload<ExtArgs>;
      game_card: Prisma.$game_cardPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        collection_id: string;
        game_card_id: string;
        added_at: Date;
        user_id: string;
        purchase_price: number | null;
        current_value: number | null;
        condition: string | null;
        rating: number | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['collection_card']
    >;
    composites: {};
  };

  type collection_cardGetPayload<S extends boolean | null | undefined | collection_cardDefaultArgs> = $Result.GetResult<
    Prisma.$collection_cardPayload,
    S
  >;

  type collection_cardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    collection_cardFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Collection_cardCountAggregateInputType | true;
  };

  export interface collection_cardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['collection_card']; meta: { name: 'collection_card' } };
    /**
     * Find zero or one Collection_card that matches the filter.
     * @param {collection_cardFindUniqueArgs} args - Arguments to find a Collection_card
     * @example
     * // Get one Collection_card
     * const collection_card = await prisma.collection_card.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends collection_cardFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, collection_cardFindUniqueArgs<ExtArgs>>,
    ): Prisma__collection_cardClient<
      $Result.GetResult<Prisma.$collection_cardPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Collection_card that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {collection_cardFindUniqueOrThrowArgs} args - Arguments to find a Collection_card
     * @example
     * // Get one Collection_card
     * const collection_card = await prisma.collection_card.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends collection_cardFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, collection_cardFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__collection_cardClient<
      $Result.GetResult<Prisma.$collection_cardPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Collection_card that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {collection_cardFindFirstArgs} args - Arguments to find a Collection_card
     * @example
     * // Get one Collection_card
     * const collection_card = await prisma.collection_card.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends collection_cardFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, collection_cardFindFirstArgs<ExtArgs>>,
    ): Prisma__collection_cardClient<
      $Result.GetResult<Prisma.$collection_cardPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Collection_card that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {collection_cardFindFirstOrThrowArgs} args - Arguments to find a Collection_card
     * @example
     * // Get one Collection_card
     * const collection_card = await prisma.collection_card.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends collection_cardFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, collection_cardFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__collection_cardClient<
      $Result.GetResult<Prisma.$collection_cardPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Collection_cards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {collection_cardFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Collection_cards
     * const collection_cards = await prisma.collection_card.findMany()
     *
     * // Get first 10 Collection_cards
     * const collection_cards = await prisma.collection_card.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const collection_cardWithIdOnly = await prisma.collection_card.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends collection_cardFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, collection_cardFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$collection_cardPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Collection_card.
     * @param {collection_cardCreateArgs} args - Arguments to create a Collection_card.
     * @example
     * // Create one Collection_card
     * const Collection_card = await prisma.collection_card.create({
     *   data: {
     *     // ... data to create a Collection_card
     *   }
     * })
     *
     **/
    create<T extends collection_cardCreateArgs<ExtArgs>>(
      args: SelectSubset<T, collection_cardCreateArgs<ExtArgs>>,
    ): Prisma__collection_cardClient<
      $Result.GetResult<Prisma.$collection_cardPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Collection_cards.
     *     @param {collection_cardCreateManyArgs} args - Arguments to create many Collection_cards.
     *     @example
     *     // Create many Collection_cards
     *     const collection_card = await prisma.collection_card.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends collection_cardCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, collection_cardCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Collection_card.
     * @param {collection_cardDeleteArgs} args - Arguments to delete one Collection_card.
     * @example
     * // Delete one Collection_card
     * const Collection_card = await prisma.collection_card.delete({
     *   where: {
     *     // ... filter to delete one Collection_card
     *   }
     * })
     *
     **/
    delete<T extends collection_cardDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, collection_cardDeleteArgs<ExtArgs>>,
    ): Prisma__collection_cardClient<
      $Result.GetResult<Prisma.$collection_cardPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Collection_card.
     * @param {collection_cardUpdateArgs} args - Arguments to update one Collection_card.
     * @example
     * // Update one Collection_card
     * const collection_card = await prisma.collection_card.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends collection_cardUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, collection_cardUpdateArgs<ExtArgs>>,
    ): Prisma__collection_cardClient<
      $Result.GetResult<Prisma.$collection_cardPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Collection_cards.
     * @param {collection_cardDeleteManyArgs} args - Arguments to filter Collection_cards to delete.
     * @example
     * // Delete a few Collection_cards
     * const { count } = await prisma.collection_card.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends collection_cardDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, collection_cardDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Collection_cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {collection_cardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Collection_cards
     * const collection_card = await prisma.collection_card.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends collection_cardUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, collection_cardUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Collection_card.
     * @param {collection_cardUpsertArgs} args - Arguments to update or create a Collection_card.
     * @example
     * // Update or create a Collection_card
     * const collection_card = await prisma.collection_card.upsert({
     *   create: {
     *     // ... data to create a Collection_card
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Collection_card we want to update
     *   }
     * })
     **/
    upsert<T extends collection_cardUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, collection_cardUpsertArgs<ExtArgs>>,
    ): Prisma__collection_cardClient<
      $Result.GetResult<Prisma.$collection_cardPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Collection_cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {collection_cardCountArgs} args - Arguments to filter Collection_cards to count.
     * @example
     * // Count the number of Collection_cards
     * const count = await prisma.collection_card.count({
     *   where: {
     *     // ... the filter for the Collection_cards we want to count
     *   }
     * })
     **/
    count<T extends collection_cardCountArgs>(
      args?: Subset<T, collection_cardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Collection_cardCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Collection_card.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Collection_cardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Collection_cardAggregateArgs>(
      args: Subset<T, Collection_cardAggregateArgs>,
    ): Prisma.PrismaPromise<GetCollection_cardAggregateType<T>>;

    /**
     * Group by Collection_card.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {collection_cardGroupByArgs} args - Group by arguments.
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
      T extends collection_cardGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: collection_cardGroupByArgs['orderBy'] }
        : { orderBy?: collection_cardGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, collection_cardGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCollection_cardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the collection_card model
     */
    readonly fields: collection_cardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for collection_card.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__collection_cardClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    collection<T extends collectionDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, collectionDefaultArgs<ExtArgs>>,
    ): Prisma__collectionClient<
      $Result.GetResult<Prisma.$collectionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    game_card<T extends game_cardDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, game_cardDefaultArgs<ExtArgs>>,
    ): Prisma__game_cardClient<
      $Result.GetResult<Prisma.$game_cardPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the collection_card model
   */
  interface collection_cardFieldRefs {
    readonly id: FieldRef<'collection_card', 'String'>;
    readonly collection_id: FieldRef<'collection_card', 'String'>;
    readonly game_card_id: FieldRef<'collection_card', 'String'>;
    readonly added_at: FieldRef<'collection_card', 'DateTime'>;
    readonly user_id: FieldRef<'collection_card', 'String'>;
    readonly purchase_price: FieldRef<'collection_card', 'Int'>;
    readonly current_value: FieldRef<'collection_card', 'Int'>;
    readonly condition: FieldRef<'collection_card', 'String'>;
    readonly rating: FieldRef<'collection_card', 'Int'>;
    readonly created_at: FieldRef<'collection_card', 'DateTime'>;
    readonly updated_at: FieldRef<'collection_card', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * collection_card findUnique
   */
  export type collection_cardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collection_card
     */
    select?: collection_cardSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: collection_cardInclude<ExtArgs> | null;
    /**
     * Filter, which collection_card to fetch.
     */
    where: collection_cardWhereUniqueInput;
  };

  /**
   * collection_card findUniqueOrThrow
   */
  export type collection_cardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the collection_card
       */
      select?: collection_cardSelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well.
       */
      include?: collection_cardInclude<ExtArgs> | null;
      /**
       * Filter, which collection_card to fetch.
       */
      where: collection_cardWhereUniqueInput;
    };

  /**
   * collection_card findFirst
   */
  export type collection_cardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collection_card
     */
    select?: collection_cardSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: collection_cardInclude<ExtArgs> | null;
    /**
     * Filter, which collection_card to fetch.
     */
    where?: collection_cardWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of collection_cards to fetch.
     */
    orderBy?: collection_cardOrderByWithRelationInput | collection_cardOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for collection_cards.
     */
    cursor?: collection_cardWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` collection_cards from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` collection_cards.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of collection_cards.
     */
    distinct?: Collection_cardScalarFieldEnum | Collection_cardScalarFieldEnum[];
  };

  /**
   * collection_card findFirstOrThrow
   */
  export type collection_cardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the collection_card
       */
      select?: collection_cardSelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well.
       */
      include?: collection_cardInclude<ExtArgs> | null;
      /**
       * Filter, which collection_card to fetch.
       */
      where?: collection_cardWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of collection_cards to fetch.
       */
      orderBy?: collection_cardOrderByWithRelationInput | collection_cardOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for searching for collection_cards.
       */
      cursor?: collection_cardWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` collection_cards from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` collection_cards.
       */
      skip?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
       *
       * Filter by unique combinations of collection_cards.
       */
      distinct?: Collection_cardScalarFieldEnum | Collection_cardScalarFieldEnum[];
    };

  /**
   * collection_card findMany
   */
  export type collection_cardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collection_card
     */
    select?: collection_cardSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: collection_cardInclude<ExtArgs> | null;
    /**
     * Filter, which collection_cards to fetch.
     */
    where?: collection_cardWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of collection_cards to fetch.
     */
    orderBy?: collection_cardOrderByWithRelationInput | collection_cardOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing collection_cards.
     */
    cursor?: collection_cardWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` collection_cards from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` collection_cards.
     */
    skip?: number;
    distinct?: Collection_cardScalarFieldEnum | Collection_cardScalarFieldEnum[];
  };

  /**
   * collection_card create
   */
  export type collection_cardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collection_card
     */
    select?: collection_cardSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: collection_cardInclude<ExtArgs> | null;
    /**
     * The data needed to create a collection_card.
     */
    data: XOR<collection_cardCreateInput, collection_cardUncheckedCreateInput>;
  };

  /**
   * collection_card createMany
   */
  export type collection_cardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many collection_cards.
     */
    data: collection_cardCreateManyInput | collection_cardCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * collection_card update
   */
  export type collection_cardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collection_card
     */
    select?: collection_cardSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: collection_cardInclude<ExtArgs> | null;
    /**
     * The data needed to update a collection_card.
     */
    data: XOR<collection_cardUpdateInput, collection_cardUncheckedUpdateInput>;
    /**
     * Choose, which collection_card to update.
     */
    where: collection_cardWhereUniqueInput;
  };

  /**
   * collection_card updateMany
   */
  export type collection_cardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update collection_cards.
     */
    data: XOR<collection_cardUpdateManyMutationInput, collection_cardUncheckedUpdateManyInput>;
    /**
     * Filter which collection_cards to update
     */
    where?: collection_cardWhereInput;
  };

  /**
   * collection_card upsert
   */
  export type collection_cardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collection_card
     */
    select?: collection_cardSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: collection_cardInclude<ExtArgs> | null;
    /**
     * The filter to search for the collection_card to update in case it exists.
     */
    where: collection_cardWhereUniqueInput;
    /**
     * In case the collection_card found by the `where` argument doesn't exist, create a new collection_card with this data.
     */
    create: XOR<collection_cardCreateInput, collection_cardUncheckedCreateInput>;
    /**
     * In case the collection_card was found with the provided `where` argument, update it with this data.
     */
    update: XOR<collection_cardUpdateInput, collection_cardUncheckedUpdateInput>;
  };

  /**
   * collection_card delete
   */
  export type collection_cardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collection_card
     */
    select?: collection_cardSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: collection_cardInclude<ExtArgs> | null;
    /**
     * Filter which collection_card to delete.
     */
    where: collection_cardWhereUniqueInput;
  };

  /**
   * collection_card deleteMany
   */
  export type collection_cardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which collection_cards to delete
     */
    where?: collection_cardWhereInput;
  };

  /**
   * collection_card without action
   */
  export type collection_cardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collection_card
     */
    select?: collection_cardSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: collection_cardInclude<ExtArgs> | null;
  };

  /**
   * Model company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  export type CompanyMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    zip: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    tenant_id: string | null;
  };

  export type CompanyMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    zip: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    tenant_id: string | null;
  };

  export type CompanyCountAggregateOutputType = {
    id: number;
    description: number;
    address: number;
    city: number;
    state: number;
    zip: number;
    name: number;
    created_at: number;
    updated_at: number;
    tenant_id: number;
    _all: number;
  };

  export type CompanyMinAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    city?: true;
    state?: true;
    zip?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    tenant_id?: true;
  };

  export type CompanyMaxAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    city?: true;
    state?: true;
    zip?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    tenant_id?: true;
  };

  export type CompanyCountAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    city?: true;
    state?: true;
    zip?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which company to aggregate.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned companies
     **/
    _count?: true | CompanyCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CompanyMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CompanyMaxAggregateInputType;
  };

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
    [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>;
  };

  export type companyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companyWhereInput;
    orderBy?: companyOrderByWithAggregationInput | companyOrderByWithAggregationInput[];
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum;
    having?: companyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CompanyCountAggregateInputType | true;
    _min?: CompanyMinAggregateInputType;
    _max?: CompanyMaxAggregateInputType;
  };

  export type CompanyGroupByOutputType = {
    id: string;
    description: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    zip: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    tenant_id: string;
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  type GetCompanyGroupByPayload<T extends companyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CompanyGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
          : GetScalarType<T[P], CompanyGroupByOutputType[P]>;
      }
    >
  >;

  export type companySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      address?: boolean;
      city?: boolean;
      state?: boolean;
      zip?: boolean;
      name?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      tenant_id?: boolean;
      game_card?: boolean | company$game_cardArgs<ExtArgs>;
      _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['company']
  >;

  export type companySelectScalar = {
    id?: boolean;
    description?: boolean;
    address?: boolean;
    city?: boolean;
    state?: boolean;
    zip?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    tenant_id?: boolean;
  };

  export type companyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game_card?: boolean | company$game_cardArgs<ExtArgs>;
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $companyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'company';
    objects: {
      game_card: Prisma.$game_cardPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        address: string | null;
        city: string | null;
        state: string | null;
        zip: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        tenant_id: string;
      },
      ExtArgs['result']['company']
    >;
    composites: {};
  };

  type companyGetPayload<S extends boolean | null | undefined | companyDefaultArgs> = $Result.GetResult<
    Prisma.$companyPayload,
    S
  >;

  type companyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    companyFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: CompanyCountAggregateInputType | true;
  };

  export interface companyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['company']; meta: { name: 'company' } };
    /**
     * Find zero or one Company that matches the filter.
     * @param {companyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends companyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, companyFindUniqueArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Company that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {companyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends companyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends companyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends companyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     *
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends companyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Company.
     * @param {companyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     *
     **/
    create<T extends companyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, companyCreateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Companies.
     *     @param {companyCreateManyArgs} args - Arguments to create many Companies.
     *     @example
     *     // Create many Companies
     *     const company = await prisma.company.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends companyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Company.
     * @param {companyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     *
     **/
    delete<T extends companyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, companyDeleteArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Company.
     * @param {companyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends companyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Companies.
     * @param {companyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends companyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends companyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Company.
     * @param {companyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     **/
    upsert<T extends companyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpsertArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
     **/
    count<T extends companyCountArgs>(
      args?: Subset<T, companyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyAggregateArgs>(
      args: Subset<T, CompanyAggregateArgs>,
    ): Prisma.PrismaPromise<GetCompanyAggregateType<T>>;

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyGroupByArgs} args - Group by arguments.
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
      T extends companyGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: companyGroupByArgs['orderBy'] }
        : { orderBy?: companyGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, companyGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the company model
     */
    readonly fields: companyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__companyClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    game_card<T extends company$game_cardArgs<ExtArgs> = {}>(
      args?: Subset<T, company$game_cardArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$game_cardPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the company model
   */
  interface companyFieldRefs {
    readonly id: FieldRef<'company', 'String'>;
    readonly description: FieldRef<'company', 'String'>;
    readonly address: FieldRef<'company', 'String'>;
    readonly city: FieldRef<'company', 'String'>;
    readonly state: FieldRef<'company', 'String'>;
    readonly zip: FieldRef<'company', 'String'>;
    readonly name: FieldRef<'company', 'String'>;
    readonly created_at: FieldRef<'company', 'DateTime'>;
    readonly updated_at: FieldRef<'company', 'DateTime'>;
    readonly tenant_id: FieldRef<'company', 'String'>;
  }

  // Custom InputTypes

  /**
   * company findUnique
   */
  export type companyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findUniqueOrThrow
   */
  export type companyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findFirst
   */
  export type companyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findFirstOrThrow
   */
  export type companyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findMany
   */
  export type companyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which companies to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company create
   */
  export type companyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to create a company.
     */
    data: XOR<companyCreateInput, companyUncheckedCreateInput>;
  };

  /**
   * company createMany
   */
  export type companyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many companies.
     */
    data: companyCreateManyInput | companyCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * company update
   */
  export type companyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to update a company.
     */
    data: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
    /**
     * Choose, which company to update.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company updateMany
   */
  export type companyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update companies.
     */
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyInput>;
    /**
     * Filter which companies to update
     */
    where?: companyWhereInput;
  };

  /**
   * company upsert
   */
  export type companyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The filter to search for the company to update in case it exists.
     */
    where: companyWhereUniqueInput;
    /**
     * In case the company found by the `where` argument doesn't exist, create a new company with this data.
     */
    create: XOR<companyCreateInput, companyUncheckedCreateInput>;
    /**
     * In case the company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
  };

  /**
   * company delete
   */
  export type companyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter which company to delete.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company deleteMany
   */
  export type companyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to delete
     */
    where?: companyWhereInput;
  };

  /**
   * company.game_card
   */
  export type company$game_cardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_card
     */
    select?: game_cardSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: game_cardInclude<ExtArgs> | null;
    where?: game_cardWhereInput;
    orderBy?: game_cardOrderByWithRelationInput | game_cardOrderByWithRelationInput[];
    cursor?: game_cardWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Game_cardScalarFieldEnum | Game_cardScalarFieldEnum[];
  };

  /**
   * company without action
   */
  export type companyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
  };

  /**
   * Model game_card
   */

  export type AggregateGame_card = {
    _count: Game_cardCountAggregateOutputType | null;
    _avg: Game_cardAvgAggregateOutputType | null;
    _sum: Game_cardSumAggregateOutputType | null;
    _min: Game_cardMinAggregateOutputType | null;
    _max: Game_cardMaxAggregateOutputType | null;
  };

  export type Game_cardAvgAggregateOutputType = {
    rating: number | null;
  };

  export type Game_cardSumAggregateOutputType = {
    rating: number | null;
  };

  export type Game_cardMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    user_id: string | null;
    company_id: string | null;
    release_date: Date | null;
    genre: string | null;
    rating: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Game_cardMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    user_id: string | null;
    company_id: string | null;
    release_date: Date | null;
    genre: string | null;
    rating: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Game_cardCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    user_id: number;
    company_id: number;
    release_date: number;
    genre: number;
    rating: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Game_cardAvgAggregateInputType = {
    rating?: true;
  };

  export type Game_cardSumAggregateInputType = {
    rating?: true;
  };

  export type Game_cardMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    user_id?: true;
    company_id?: true;
    release_date?: true;
    genre?: true;
    rating?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Game_cardMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    user_id?: true;
    company_id?: true;
    release_date?: true;
    genre?: true;
    rating?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Game_cardCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    user_id?: true;
    company_id?: true;
    release_date?: true;
    genre?: true;
    rating?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Game_cardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which game_card to aggregate.
     */
    where?: game_cardWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of game_cards to fetch.
     */
    orderBy?: game_cardOrderByWithRelationInput | game_cardOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: game_cardWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` game_cards from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` game_cards.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned game_cards
     **/
    _count?: true | Game_cardCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: Game_cardAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: Game_cardSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Game_cardMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Game_cardMaxAggregateInputType;
  };

  export type GetGame_cardAggregateType<T extends Game_cardAggregateArgs> = {
    [P in keyof T & keyof AggregateGame_card]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGame_card[P]>
      : GetScalarType<T[P], AggregateGame_card[P]>;
  };

  export type game_cardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: game_cardWhereInput;
    orderBy?: game_cardOrderByWithAggregationInput | game_cardOrderByWithAggregationInput[];
    by: Game_cardScalarFieldEnum[] | Game_cardScalarFieldEnum;
    having?: game_cardScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Game_cardCountAggregateInputType | true;
    _avg?: Game_cardAvgAggregateInputType;
    _sum?: Game_cardSumAggregateInputType;
    _min?: Game_cardMinAggregateInputType;
    _max?: Game_cardMaxAggregateInputType;
  };

  export type Game_cardGroupByOutputType = {
    id: string;
    name: string;
    description: string | null;
    user_id: string;
    company_id: string;
    release_date: Date | null;
    genre: string | null;
    rating: number | null;
    created_at: Date;
    updated_at: Date;
    _count: Game_cardCountAggregateOutputType | null;
    _avg: Game_cardAvgAggregateOutputType | null;
    _sum: Game_cardSumAggregateOutputType | null;
    _min: Game_cardMinAggregateOutputType | null;
    _max: Game_cardMaxAggregateOutputType | null;
  };

  type GetGame_cardGroupByPayload<T extends game_cardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Game_cardGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Game_cardGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Game_cardGroupByOutputType[P]>
          : GetScalarType<T[P], Game_cardGroupByOutputType[P]>;
      }
    >
  >;

  export type game_cardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        name?: boolean;
        description?: boolean;
        user_id?: boolean;
        company_id?: boolean;
        release_date?: boolean;
        genre?: boolean;
        rating?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        collection_card?: boolean | game_card$collection_cardArgs<ExtArgs>;
        company?: boolean | companyDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
        transaction?: boolean | game_card$transactionArgs<ExtArgs>;
        _count?: boolean | Game_cardCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['game_card']
    >;

  export type game_cardSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    user_id?: boolean;
    company_id?: boolean;
    release_date?: boolean;
    genre?: boolean;
    rating?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type game_cardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collection_card?: boolean | game_card$collection_cardArgs<ExtArgs>;
    company?: boolean | companyDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    transaction?: boolean | game_card$transactionArgs<ExtArgs>;
    _count?: boolean | Game_cardCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $game_cardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'game_card';
    objects: {
      collection_card: Prisma.$collection_cardPayload<ExtArgs>[];
      company: Prisma.$companyPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
      transaction: Prisma.$transactionPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        description: string | null;
        user_id: string;
        company_id: string;
        release_date: Date | null;
        genre: string | null;
        rating: number | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['game_card']
    >;
    composites: {};
  };

  type game_cardGetPayload<S extends boolean | null | undefined | game_cardDefaultArgs> = $Result.GetResult<
    Prisma.$game_cardPayload,
    S
  >;

  type game_cardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    game_cardFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Game_cardCountAggregateInputType | true;
  };

  export interface game_cardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['game_card']; meta: { name: 'game_card' } };
    /**
     * Find zero or one Game_card that matches the filter.
     * @param {game_cardFindUniqueArgs} args - Arguments to find a Game_card
     * @example
     * // Get one Game_card
     * const game_card = await prisma.game_card.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends game_cardFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, game_cardFindUniqueArgs<ExtArgs>>,
    ): Prisma__game_cardClient<
      $Result.GetResult<Prisma.$game_cardPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Game_card that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {game_cardFindUniqueOrThrowArgs} args - Arguments to find a Game_card
     * @example
     * // Get one Game_card
     * const game_card = await prisma.game_card.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends game_cardFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, game_cardFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__game_cardClient<
      $Result.GetResult<Prisma.$game_cardPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Game_card that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {game_cardFindFirstArgs} args - Arguments to find a Game_card
     * @example
     * // Get one Game_card
     * const game_card = await prisma.game_card.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends game_cardFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, game_cardFindFirstArgs<ExtArgs>>,
    ): Prisma__game_cardClient<
      $Result.GetResult<Prisma.$game_cardPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Game_card that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {game_cardFindFirstOrThrowArgs} args - Arguments to find a Game_card
     * @example
     * // Get one Game_card
     * const game_card = await prisma.game_card.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends game_cardFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, game_cardFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__game_cardClient<
      $Result.GetResult<Prisma.$game_cardPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Game_cards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {game_cardFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Game_cards
     * const game_cards = await prisma.game_card.findMany()
     *
     * // Get first 10 Game_cards
     * const game_cards = await prisma.game_card.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const game_cardWithIdOnly = await prisma.game_card.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends game_cardFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, game_cardFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$game_cardPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Game_card.
     * @param {game_cardCreateArgs} args - Arguments to create a Game_card.
     * @example
     * // Create one Game_card
     * const Game_card = await prisma.game_card.create({
     *   data: {
     *     // ... data to create a Game_card
     *   }
     * })
     *
     **/
    create<T extends game_cardCreateArgs<ExtArgs>>(
      args: SelectSubset<T, game_cardCreateArgs<ExtArgs>>,
    ): Prisma__game_cardClient<$Result.GetResult<Prisma.$game_cardPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Game_cards.
     *     @param {game_cardCreateManyArgs} args - Arguments to create many Game_cards.
     *     @example
     *     // Create many Game_cards
     *     const game_card = await prisma.game_card.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends game_cardCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, game_cardCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Game_card.
     * @param {game_cardDeleteArgs} args - Arguments to delete one Game_card.
     * @example
     * // Delete one Game_card
     * const Game_card = await prisma.game_card.delete({
     *   where: {
     *     // ... filter to delete one Game_card
     *   }
     * })
     *
     **/
    delete<T extends game_cardDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, game_cardDeleteArgs<ExtArgs>>,
    ): Prisma__game_cardClient<$Result.GetResult<Prisma.$game_cardPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Game_card.
     * @param {game_cardUpdateArgs} args - Arguments to update one Game_card.
     * @example
     * // Update one Game_card
     * const game_card = await prisma.game_card.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends game_cardUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, game_cardUpdateArgs<ExtArgs>>,
    ): Prisma__game_cardClient<$Result.GetResult<Prisma.$game_cardPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Game_cards.
     * @param {game_cardDeleteManyArgs} args - Arguments to filter Game_cards to delete.
     * @example
     * // Delete a few Game_cards
     * const { count } = await prisma.game_card.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends game_cardDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, game_cardDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Game_cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {game_cardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Game_cards
     * const game_card = await prisma.game_card.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends game_cardUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, game_cardUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Game_card.
     * @param {game_cardUpsertArgs} args - Arguments to update or create a Game_card.
     * @example
     * // Update or create a Game_card
     * const game_card = await prisma.game_card.upsert({
     *   create: {
     *     // ... data to create a Game_card
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Game_card we want to update
     *   }
     * })
     **/
    upsert<T extends game_cardUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, game_cardUpsertArgs<ExtArgs>>,
    ): Prisma__game_cardClient<$Result.GetResult<Prisma.$game_cardPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Game_cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {game_cardCountArgs} args - Arguments to filter Game_cards to count.
     * @example
     * // Count the number of Game_cards
     * const count = await prisma.game_card.count({
     *   where: {
     *     // ... the filter for the Game_cards we want to count
     *   }
     * })
     **/
    count<T extends game_cardCountArgs>(
      args?: Subset<T, game_cardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Game_cardCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Game_card.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Game_cardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Game_cardAggregateArgs>(
      args: Subset<T, Game_cardAggregateArgs>,
    ): Prisma.PrismaPromise<GetGame_cardAggregateType<T>>;

    /**
     * Group by Game_card.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {game_cardGroupByArgs} args - Group by arguments.
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
      T extends game_cardGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: game_cardGroupByArgs['orderBy'] }
        : { orderBy?: game_cardGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, game_cardGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetGame_cardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the game_card model
     */
    readonly fields: game_cardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for game_card.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__game_cardClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    collection_card<T extends game_card$collection_cardArgs<ExtArgs> = {}>(
      args?: Subset<T, game_card$collection_cardArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$collection_cardPayload<ExtArgs>, T, 'findMany'> | Null>;

    company<T extends companyDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, companyDefaultArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    transaction<T extends game_card$transactionArgs<ExtArgs> = {}>(
      args?: Subset<T, game_card$transactionArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the game_card model
   */
  interface game_cardFieldRefs {
    readonly id: FieldRef<'game_card', 'String'>;
    readonly name: FieldRef<'game_card', 'String'>;
    readonly description: FieldRef<'game_card', 'String'>;
    readonly user_id: FieldRef<'game_card', 'String'>;
    readonly company_id: FieldRef<'game_card', 'String'>;
    readonly release_date: FieldRef<'game_card', 'DateTime'>;
    readonly genre: FieldRef<'game_card', 'String'>;
    readonly rating: FieldRef<'game_card', 'Int'>;
    readonly created_at: FieldRef<'game_card', 'DateTime'>;
    readonly updated_at: FieldRef<'game_card', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * game_card findUnique
   */
  export type game_cardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_card
     */
    select?: game_cardSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: game_cardInclude<ExtArgs> | null;
    /**
     * Filter, which game_card to fetch.
     */
    where: game_cardWhereUniqueInput;
  };

  /**
   * game_card findUniqueOrThrow
   */
  export type game_cardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_card
     */
    select?: game_cardSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: game_cardInclude<ExtArgs> | null;
    /**
     * Filter, which game_card to fetch.
     */
    where: game_cardWhereUniqueInput;
  };

  /**
   * game_card findFirst
   */
  export type game_cardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_card
     */
    select?: game_cardSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: game_cardInclude<ExtArgs> | null;
    /**
     * Filter, which game_card to fetch.
     */
    where?: game_cardWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of game_cards to fetch.
     */
    orderBy?: game_cardOrderByWithRelationInput | game_cardOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for game_cards.
     */
    cursor?: game_cardWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` game_cards from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` game_cards.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of game_cards.
     */
    distinct?: Game_cardScalarFieldEnum | Game_cardScalarFieldEnum[];
  };

  /**
   * game_card findFirstOrThrow
   */
  export type game_cardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_card
     */
    select?: game_cardSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: game_cardInclude<ExtArgs> | null;
    /**
     * Filter, which game_card to fetch.
     */
    where?: game_cardWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of game_cards to fetch.
     */
    orderBy?: game_cardOrderByWithRelationInput | game_cardOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for game_cards.
     */
    cursor?: game_cardWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` game_cards from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` game_cards.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of game_cards.
     */
    distinct?: Game_cardScalarFieldEnum | Game_cardScalarFieldEnum[];
  };

  /**
   * game_card findMany
   */
  export type game_cardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_card
     */
    select?: game_cardSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: game_cardInclude<ExtArgs> | null;
    /**
     * Filter, which game_cards to fetch.
     */
    where?: game_cardWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of game_cards to fetch.
     */
    orderBy?: game_cardOrderByWithRelationInput | game_cardOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing game_cards.
     */
    cursor?: game_cardWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` game_cards from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` game_cards.
     */
    skip?: number;
    distinct?: Game_cardScalarFieldEnum | Game_cardScalarFieldEnum[];
  };

  /**
   * game_card create
   */
  export type game_cardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_card
     */
    select?: game_cardSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: game_cardInclude<ExtArgs> | null;
    /**
     * The data needed to create a game_card.
     */
    data: XOR<game_cardCreateInput, game_cardUncheckedCreateInput>;
  };

  /**
   * game_card createMany
   */
  export type game_cardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many game_cards.
     */
    data: game_cardCreateManyInput | game_cardCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * game_card update
   */
  export type game_cardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_card
     */
    select?: game_cardSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: game_cardInclude<ExtArgs> | null;
    /**
     * The data needed to update a game_card.
     */
    data: XOR<game_cardUpdateInput, game_cardUncheckedUpdateInput>;
    /**
     * Choose, which game_card to update.
     */
    where: game_cardWhereUniqueInput;
  };

  /**
   * game_card updateMany
   */
  export type game_cardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update game_cards.
     */
    data: XOR<game_cardUpdateManyMutationInput, game_cardUncheckedUpdateManyInput>;
    /**
     * Filter which game_cards to update
     */
    where?: game_cardWhereInput;
  };

  /**
   * game_card upsert
   */
  export type game_cardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_card
     */
    select?: game_cardSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: game_cardInclude<ExtArgs> | null;
    /**
     * The filter to search for the game_card to update in case it exists.
     */
    where: game_cardWhereUniqueInput;
    /**
     * In case the game_card found by the `where` argument doesn't exist, create a new game_card with this data.
     */
    create: XOR<game_cardCreateInput, game_cardUncheckedCreateInput>;
    /**
     * In case the game_card was found with the provided `where` argument, update it with this data.
     */
    update: XOR<game_cardUpdateInput, game_cardUncheckedUpdateInput>;
  };

  /**
   * game_card delete
   */
  export type game_cardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_card
     */
    select?: game_cardSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: game_cardInclude<ExtArgs> | null;
    /**
     * Filter which game_card to delete.
     */
    where: game_cardWhereUniqueInput;
  };

  /**
   * game_card deleteMany
   */
  export type game_cardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which game_cards to delete
     */
    where?: game_cardWhereInput;
  };

  /**
   * game_card.collection_card
   */
  export type game_card$collection_cardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collection_card
     */
    select?: collection_cardSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: collection_cardInclude<ExtArgs> | null;
    where?: collection_cardWhereInput;
    orderBy?: collection_cardOrderByWithRelationInput | collection_cardOrderByWithRelationInput[];
    cursor?: collection_cardWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Collection_cardScalarFieldEnum | Collection_cardScalarFieldEnum[];
  };

  /**
   * game_card.transaction
   */
  export type game_card$transactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: transactionInclude<ExtArgs> | null;
    where?: transactionWhereInput;
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[];
    cursor?: transactionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[];
  };

  /**
   * game_card without action
   */
  export type game_cardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_card
     */
    select?: game_cardSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: game_cardInclude<ExtArgs> | null;
  };

  /**
   * Model transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null;
    _avg: TransactionAvgAggregateOutputType | null;
    _sum: TransactionSumAggregateOutputType | null;
    _min: TransactionMinAggregateOutputType | null;
    _max: TransactionMaxAggregateOutputType | null;
  };

  export type TransactionAvgAggregateOutputType = {
    transaction_amount: number | null;
  };

  export type TransactionSumAggregateOutputType = {
    transaction_amount: number | null;
  };

  export type TransactionMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    game_card_id: string | null;
    transaction_date: Date | null;
    transaction_type: string | null;
    transaction_amount: number | null;
    payment_method: string | null;
    billing_address: string | null;
    shipping_address: string | null;
    status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type TransactionMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    game_card_id: string | null;
    transaction_date: Date | null;
    transaction_type: string | null;
    transaction_amount: number | null;
    payment_method: string | null;
    billing_address: string | null;
    shipping_address: string | null;
    status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type TransactionCountAggregateOutputType = {
    id: number;
    user_id: number;
    game_card_id: number;
    transaction_date: number;
    transaction_type: number;
    transaction_amount: number;
    payment_method: number;
    billing_address: number;
    shipping_address: number;
    status: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type TransactionAvgAggregateInputType = {
    transaction_amount?: true;
  };

  export type TransactionSumAggregateInputType = {
    transaction_amount?: true;
  };

  export type TransactionMinAggregateInputType = {
    id?: true;
    user_id?: true;
    game_card_id?: true;
    transaction_date?: true;
    transaction_type?: true;
    transaction_amount?: true;
    payment_method?: true;
    billing_address?: true;
    shipping_address?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type TransactionMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    game_card_id?: true;
    transaction_date?: true;
    transaction_type?: true;
    transaction_amount?: true;
    payment_method?: true;
    billing_address?: true;
    shipping_address?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type TransactionCountAggregateInputType = {
    id?: true;
    user_id?: true;
    game_card_id?: true;
    transaction_date?: true;
    transaction_type?: true;
    transaction_amount?: true;
    payment_method?: true;
    billing_address?: true;
    shipping_address?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transaction to aggregate.
     */
    where?: transactionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: transactionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` transactions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned transactions
     **/
    _count?: true | TransactionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: TransactionAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: TransactionSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TransactionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TransactionMaxAggregateInputType;
  };

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
    [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>;
  };

  export type transactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionWhereInput;
    orderBy?: transactionOrderByWithAggregationInput | transactionOrderByWithAggregationInput[];
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum;
    having?: transactionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TransactionCountAggregateInputType | true;
    _avg?: TransactionAvgAggregateInputType;
    _sum?: TransactionSumAggregateInputType;
    _min?: TransactionMinAggregateInputType;
    _max?: TransactionMaxAggregateInputType;
  };

  export type TransactionGroupByOutputType = {
    id: string;
    user_id: string;
    game_card_id: string;
    transaction_date: Date;
    transaction_type: string;
    transaction_amount: number;
    payment_method: string | null;
    billing_address: string | null;
    shipping_address: string | null;
    status: string | null;
    created_at: Date;
    updated_at: Date;
    _count: TransactionCountAggregateOutputType | null;
    _avg: TransactionAvgAggregateOutputType | null;
    _sum: TransactionSumAggregateOutputType | null;
    _min: TransactionMinAggregateOutputType | null;
    _max: TransactionMaxAggregateOutputType | null;
  };

  type GetTransactionGroupByPayload<T extends transactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> & {
        [P in keyof T & keyof TransactionGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
          : GetScalarType<T[P], TransactionGroupByOutputType[P]>;
      }
    >
  >;

  export type transactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        user_id?: boolean;
        game_card_id?: boolean;
        transaction_date?: boolean;
        transaction_type?: boolean;
        transaction_amount?: boolean;
        payment_method?: boolean;
        billing_address?: boolean;
        shipping_address?: boolean;
        status?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        game_card?: boolean | game_cardDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['transaction']
    >;

  export type transactionSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    game_card_id?: boolean;
    transaction_date?: boolean;
    transaction_type?: boolean;
    transaction_amount?: boolean;
    payment_method?: boolean;
    billing_address?: boolean;
    shipping_address?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type transactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game_card?: boolean | game_cardDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $transactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'transaction';
    objects: {
      game_card: Prisma.$game_cardPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        game_card_id: string;
        transaction_date: Date;
        transaction_type: string;
        transaction_amount: number;
        payment_method: string | null;
        billing_address: string | null;
        shipping_address: string | null;
        status: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['transaction']
    >;
    composites: {};
  };

  type transactionGetPayload<S extends boolean | null | undefined | transactionDefaultArgs> = $Result.GetResult<
    Prisma.$transactionPayload,
    S
  >;

  type transactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    transactionFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: TransactionCountAggregateInputType | true;
  };

  export interface transactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['transaction']; meta: { name: 'transaction' } };
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
     **/
    findUnique<T extends transactionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, transactionFindUniqueArgs<ExtArgs>>,
    ): Prisma__transactionClient<
      $Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Transaction that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {transactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends transactionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, transactionFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__transactionClient<
      $Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

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
     **/
    findFirst<T extends transactionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, transactionFindFirstArgs<ExtArgs>>,
    ): Prisma__transactionClient<
      $Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

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
     **/
    findFirstOrThrow<T extends transactionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, transactionFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__transactionClient<
      $Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionFindManyArgs=} args - Arguments to filter and select certain fields only.
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
     **/
    findMany<T extends transactionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, transactionFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, 'findMany'>>;

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
     **/
    create<T extends transactionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, transactionCreateArgs<ExtArgs>>,
    ): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Transactions.
     *     @param {transactionCreateManyArgs} args - Arguments to create many Transactions.
     *     @example
     *     // Create many Transactions
     *     const transaction = await prisma.transaction.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends transactionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, transactionCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
     **/
    delete<T extends transactionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, transactionDeleteArgs<ExtArgs>>,
    ): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

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
     **/
    update<T extends transactionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, transactionUpdateArgs<ExtArgs>>,
    ): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

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
     **/
    deleteMany<T extends transactionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, transactionDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
     **/
    updateMany<T extends transactionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, transactionUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
     **/
    upsert<T extends transactionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, transactionUpsertArgs<ExtArgs>>,
    ): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

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
    >;

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
    aggregate<T extends TransactionAggregateArgs>(
      args: Subset<T, TransactionAggregateArgs>,
    ): Prisma.PrismaPromise<GetTransactionAggregateType<T>>;

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
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, transactionGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
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
  export interface Prisma__transactionClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    game_card<T extends game_cardDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, game_cardDefaultArgs<ExtArgs>>,
    ): Prisma__game_cardClient<
      $Result.GetResult<Prisma.$game_cardPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the transaction model
   */
  interface transactionFieldRefs {
    readonly id: FieldRef<'transaction', 'String'>;
    readonly user_id: FieldRef<'transaction', 'String'>;
    readonly game_card_id: FieldRef<'transaction', 'String'>;
    readonly transaction_date: FieldRef<'transaction', 'DateTime'>;
    readonly transaction_type: FieldRef<'transaction', 'String'>;
    readonly transaction_amount: FieldRef<'transaction', 'Int'>;
    readonly payment_method: FieldRef<'transaction', 'String'>;
    readonly billing_address: FieldRef<'transaction', 'String'>;
    readonly shipping_address: FieldRef<'transaction', 'String'>;
    readonly status: FieldRef<'transaction', 'String'>;
    readonly created_at: FieldRef<'transaction', 'DateTime'>;
    readonly updated_at: FieldRef<'transaction', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * transaction findUnique
   */
  export type transactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: transactionInclude<ExtArgs> | null;
    /**
     * Filter, which transaction to fetch.
     */
    where: transactionWhereUniqueInput;
  };

  /**
   * transaction findUniqueOrThrow
   */
  export type transactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: transactionInclude<ExtArgs> | null;
    /**
     * Filter, which transaction to fetch.
     */
    where: transactionWhereUniqueInput;
  };

  /**
   * transaction findFirst
   */
  export type transactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: transactionInclude<ExtArgs> | null;
    /**
     * Filter, which transaction to fetch.
     */
    where?: transactionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for transactions.
     */
    cursor?: transactionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` transactions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[];
  };

  /**
   * transaction findFirstOrThrow
   */
  export type transactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: transactionInclude<ExtArgs> | null;
    /**
     * Filter, which transaction to fetch.
     */
    where?: transactionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for transactions.
     */
    cursor?: transactionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` transactions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[];
  };

  /**
   * transaction findMany
   */
  export type transactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: transactionInclude<ExtArgs> | null;
    /**
     * Filter, which transactions to fetch.
     */
    where?: transactionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing transactions.
     */
    cursor?: transactionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` transactions.
     */
    skip?: number;
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[];
  };

  /**
   * transaction create
   */
  export type transactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: transactionInclude<ExtArgs> | null;
    /**
     * The data needed to create a transaction.
     */
    data: XOR<transactionCreateInput, transactionUncheckedCreateInput>;
  };

  /**
   * transaction createMany
   */
  export type transactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many transactions.
     */
    data: transactionCreateManyInput | transactionCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * transaction update
   */
  export type transactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: transactionInclude<ExtArgs> | null;
    /**
     * The data needed to update a transaction.
     */
    data: XOR<transactionUpdateInput, transactionUncheckedUpdateInput>;
    /**
     * Choose, which transaction to update.
     */
    where: transactionWhereUniqueInput;
  };

  /**
   * transaction updateMany
   */
  export type transactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update transactions.
     */
    data: XOR<transactionUpdateManyMutationInput, transactionUncheckedUpdateManyInput>;
    /**
     * Filter which transactions to update
     */
    where?: transactionWhereInput;
  };

  /**
   * transaction upsert
   */
  export type transactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: transactionInclude<ExtArgs> | null;
    /**
     * The filter to search for the transaction to update in case it exists.
     */
    where: transactionWhereUniqueInput;
    /**
     * In case the transaction found by the `where` argument doesn't exist, create a new transaction with this data.
     */
    create: XOR<transactionCreateInput, transactionUncheckedCreateInput>;
    /**
     * In case the transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<transactionUpdateInput, transactionUncheckedUpdateInput>;
  };

  /**
   * transaction delete
   */
  export type transactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: transactionInclude<ExtArgs> | null;
    /**
     * Filter which transaction to delete.
     */
    where: transactionWhereUniqueInput;
  };

  /**
   * transaction deleteMany
   */
  export type transactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transactions to delete
     */
    where?: transactionWhereInput;
  };

  /**
   * transaction without action
   */
  export type transactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: transactionInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    first_name: number;
    last_name: number;
    locale: number;
    timezone: number;
    avatar_url: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      first_name?: boolean;
      last_name?: boolean;
      locale?: boolean;
      timezone?: boolean;
      avatar_url?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      collection?: boolean | user$collectionArgs<ExtArgs>;
      collection_card?: boolean | user$collection_cardArgs<ExtArgs>;
      game_card?: boolean | user$game_cardArgs<ExtArgs>;
      transaction?: boolean | user$transactionArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    locale?: boolean;
    timezone?: boolean;
    avatar_url?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collection?: boolean | user$collectionArgs<ExtArgs>;
    collection_card?: boolean | user$collection_cardArgs<ExtArgs>;
    game_card?: boolean | user$game_cardArgs<ExtArgs>;
    transaction?: boolean | user$transactionArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      collection: Prisma.$collectionPayload<ExtArgs>[];
      collection_card: Prisma.$collection_cardPayload<ExtArgs>[];
      game_card: Prisma.$game_cardPayload<ExtArgs>[];
      transaction: Prisma.$transactionPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        first_name: string | null;
        last_name: string | null;
        locale: string | null;
        timezone: string | null;
        avatar_url: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
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
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
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
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
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
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
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
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

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
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    collection<T extends user$collectionArgs<ExtArgs> = {}>(
      args?: Subset<T, user$collectionArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$collectionPayload<ExtArgs>, T, 'findMany'> | Null>;

    collection_card<T extends user$collection_cardArgs<ExtArgs> = {}>(
      args?: Subset<T, user$collection_cardArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$collection_cardPayload<ExtArgs>, T, 'findMany'> | Null>;

    game_card<T extends user$game_cardArgs<ExtArgs> = {}>(
      args?: Subset<T, user$game_cardArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$game_cardPayload<ExtArgs>, T, 'findMany'> | Null>;

    transaction<T extends user$transactionArgs<ExtArgs> = {}>(
      args?: Subset<T, user$transactionArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly first_name: FieldRef<'user', 'String'>;
    readonly last_name: FieldRef<'user', 'String'>;
    readonly locale: FieldRef<'user', 'String'>;
    readonly timezone: FieldRef<'user', 'String'>;
    readonly avatar_url: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.collection
   */
  export type user$collectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collection
     */
    select?: collectionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: collectionInclude<ExtArgs> | null;
    where?: collectionWhereInput;
    orderBy?: collectionOrderByWithRelationInput | collectionOrderByWithRelationInput[];
    cursor?: collectionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[];
  };

  /**
   * user.collection_card
   */
  export type user$collection_cardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collection_card
     */
    select?: collection_cardSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: collection_cardInclude<ExtArgs> | null;
    where?: collection_cardWhereInput;
    orderBy?: collection_cardOrderByWithRelationInput | collection_cardOrderByWithRelationInput[];
    cursor?: collection_cardWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Collection_cardScalarFieldEnum | Collection_cardScalarFieldEnum[];
  };

  /**
   * user.game_card
   */
  export type user$game_cardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the game_card
     */
    select?: game_cardSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: game_cardInclude<ExtArgs> | null;
    where?: game_cardWhereInput;
    orderBy?: game_cardOrderByWithRelationInput | game_cardOrderByWithRelationInput[];
    cursor?: game_cardWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Game_cardScalarFieldEnum | Game_cardScalarFieldEnum[];
  };

  /**
   * user.transaction
   */
  export type user$transactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: transactionInclude<ExtArgs> | null;
    where?: transactionWhereInput;
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[];
    cursor?: transactionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const CollectionScalarFieldEnum: {
    id: 'id';
    name: 'name';
    description: 'description';
    user_id: 'user_id';
    total_cards: 'total_cards';
    total_value: 'total_value';
    average_rating: 'average_rating';
    last_updated_card: 'last_updated_card';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type CollectionScalarFieldEnum = (typeof CollectionScalarFieldEnum)[keyof typeof CollectionScalarFieldEnum];

  export const Collection_cardScalarFieldEnum: {
    id: 'id';
    collection_id: 'collection_id';
    game_card_id: 'game_card_id';
    added_at: 'added_at';
    user_id: 'user_id';
    purchase_price: 'purchase_price';
    current_value: 'current_value';
    condition: 'condition';
    rating: 'rating';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Collection_cardScalarFieldEnum =
    (typeof Collection_cardScalarFieldEnum)[keyof typeof Collection_cardScalarFieldEnum];

  export const CompanyScalarFieldEnum: {
    id: 'id';
    description: 'description';
    address: 'address';
    city: 'city';
    state: 'state';
    zip: 'zip';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    tenant_id: 'tenant_id';
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum];

  export const Game_cardScalarFieldEnum: {
    id: 'id';
    name: 'name';
    description: 'description';
    user_id: 'user_id';
    company_id: 'company_id';
    release_date: 'release_date';
    genre: 'genre';
    rating: 'rating';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Game_cardScalarFieldEnum = (typeof Game_cardScalarFieldEnum)[keyof typeof Game_cardScalarFieldEnum];

  export const TransactionScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    game_card_id: 'game_card_id';
    transaction_date: 'transaction_date';
    transaction_type: 'transaction_type';
    transaction_amount: 'transaction_amount';
    payment_method: 'payment_method';
    billing_address: 'billing_address';
    shipping_address: 'shipping_address';
    status: 'status';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    first_name: 'first_name';
    last_name: 'last_name';
    locale: 'locale';
    timezone: 'timezone';
    avatar_url: 'avatar_url';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type collectionWhereInput = {
    AND?: collectionWhereInput | collectionWhereInput[];
    OR?: collectionWhereInput[];
    NOT?: collectionWhereInput | collectionWhereInput[];
    id?: UuidFilter<'collection'> | string;
    name?: StringFilter<'collection'> | string;
    description?: StringNullableFilter<'collection'> | string | null;
    user_id?: UuidFilter<'collection'> | string;
    total_cards?: IntNullableFilter<'collection'> | number | null;
    total_value?: IntNullableFilter<'collection'> | number | null;
    average_rating?: IntNullableFilter<'collection'> | number | null;
    last_updated_card?: DateTimeNullableFilter<'collection'> | Date | string | null;
    created_at?: DateTimeFilter<'collection'> | Date | string;
    updated_at?: DateTimeFilter<'collection'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
    collection_card?: Collection_cardListRelationFilter;
  };

  export type collectionOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    total_cards?: SortOrderInput | SortOrder;
    total_value?: SortOrderInput | SortOrder;
    average_rating?: SortOrderInput | SortOrder;
    last_updated_card?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
    collection_card?: collection_cardOrderByRelationAggregateInput;
  };

  export type collectionWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: collectionWhereInput | collectionWhereInput[];
      OR?: collectionWhereInput[];
      NOT?: collectionWhereInput | collectionWhereInput[];
      name?: StringFilter<'collection'> | string;
      description?: StringNullableFilter<'collection'> | string | null;
      user_id?: UuidFilter<'collection'> | string;
      total_cards?: IntNullableFilter<'collection'> | number | null;
      total_value?: IntNullableFilter<'collection'> | number | null;
      average_rating?: IntNullableFilter<'collection'> | number | null;
      last_updated_card?: DateTimeNullableFilter<'collection'> | Date | string | null;
      created_at?: DateTimeFilter<'collection'> | Date | string;
      updated_at?: DateTimeFilter<'collection'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
      collection_card?: Collection_cardListRelationFilter;
    },
    'id'
  >;

  export type collectionOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    total_cards?: SortOrderInput | SortOrder;
    total_value?: SortOrderInput | SortOrder;
    average_rating?: SortOrderInput | SortOrder;
    last_updated_card?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: collectionCountOrderByAggregateInput;
    _avg?: collectionAvgOrderByAggregateInput;
    _max?: collectionMaxOrderByAggregateInput;
    _min?: collectionMinOrderByAggregateInput;
    _sum?: collectionSumOrderByAggregateInput;
  };

  export type collectionScalarWhereWithAggregatesInput = {
    AND?: collectionScalarWhereWithAggregatesInput | collectionScalarWhereWithAggregatesInput[];
    OR?: collectionScalarWhereWithAggregatesInput[];
    NOT?: collectionScalarWhereWithAggregatesInput | collectionScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'collection'> | string;
    name?: StringWithAggregatesFilter<'collection'> | string;
    description?: StringNullableWithAggregatesFilter<'collection'> | string | null;
    user_id?: UuidWithAggregatesFilter<'collection'> | string;
    total_cards?: IntNullableWithAggregatesFilter<'collection'> | number | null;
    total_value?: IntNullableWithAggregatesFilter<'collection'> | number | null;
    average_rating?: IntNullableWithAggregatesFilter<'collection'> | number | null;
    last_updated_card?: DateTimeNullableWithAggregatesFilter<'collection'> | Date | string | null;
    created_at?: DateTimeWithAggregatesFilter<'collection'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'collection'> | Date | string;
  };

  export type collection_cardWhereInput = {
    AND?: collection_cardWhereInput | collection_cardWhereInput[];
    OR?: collection_cardWhereInput[];
    NOT?: collection_cardWhereInput | collection_cardWhereInput[];
    id?: UuidFilter<'collection_card'> | string;
    collection_id?: UuidFilter<'collection_card'> | string;
    game_card_id?: UuidFilter<'collection_card'> | string;
    added_at?: DateTimeFilter<'collection_card'> | Date | string;
    user_id?: UuidFilter<'collection_card'> | string;
    purchase_price?: IntNullableFilter<'collection_card'> | number | null;
    current_value?: IntNullableFilter<'collection_card'> | number | null;
    condition?: StringNullableFilter<'collection_card'> | string | null;
    rating?: IntNullableFilter<'collection_card'> | number | null;
    created_at?: DateTimeFilter<'collection_card'> | Date | string;
    updated_at?: DateTimeFilter<'collection_card'> | Date | string;
    collection?: XOR<CollectionRelationFilter, collectionWhereInput>;
    game_card?: XOR<Game_cardRelationFilter, game_cardWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type collection_cardOrderByWithRelationInput = {
    id?: SortOrder;
    collection_id?: SortOrder;
    game_card_id?: SortOrder;
    added_at?: SortOrder;
    user_id?: SortOrder;
    purchase_price?: SortOrderInput | SortOrder;
    current_value?: SortOrderInput | SortOrder;
    condition?: SortOrderInput | SortOrder;
    rating?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    collection?: collectionOrderByWithRelationInput;
    game_card?: game_cardOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type collection_cardWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: collection_cardWhereInput | collection_cardWhereInput[];
      OR?: collection_cardWhereInput[];
      NOT?: collection_cardWhereInput | collection_cardWhereInput[];
      collection_id?: UuidFilter<'collection_card'> | string;
      game_card_id?: UuidFilter<'collection_card'> | string;
      added_at?: DateTimeFilter<'collection_card'> | Date | string;
      user_id?: UuidFilter<'collection_card'> | string;
      purchase_price?: IntNullableFilter<'collection_card'> | number | null;
      current_value?: IntNullableFilter<'collection_card'> | number | null;
      condition?: StringNullableFilter<'collection_card'> | string | null;
      rating?: IntNullableFilter<'collection_card'> | number | null;
      created_at?: DateTimeFilter<'collection_card'> | Date | string;
      updated_at?: DateTimeFilter<'collection_card'> | Date | string;
      collection?: XOR<CollectionRelationFilter, collectionWhereInput>;
      game_card?: XOR<Game_cardRelationFilter, game_cardWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type collection_cardOrderByWithAggregationInput = {
    id?: SortOrder;
    collection_id?: SortOrder;
    game_card_id?: SortOrder;
    added_at?: SortOrder;
    user_id?: SortOrder;
    purchase_price?: SortOrderInput | SortOrder;
    current_value?: SortOrderInput | SortOrder;
    condition?: SortOrderInput | SortOrder;
    rating?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: collection_cardCountOrderByAggregateInput;
    _avg?: collection_cardAvgOrderByAggregateInput;
    _max?: collection_cardMaxOrderByAggregateInput;
    _min?: collection_cardMinOrderByAggregateInput;
    _sum?: collection_cardSumOrderByAggregateInput;
  };

  export type collection_cardScalarWhereWithAggregatesInput = {
    AND?: collection_cardScalarWhereWithAggregatesInput | collection_cardScalarWhereWithAggregatesInput[];
    OR?: collection_cardScalarWhereWithAggregatesInput[];
    NOT?: collection_cardScalarWhereWithAggregatesInput | collection_cardScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'collection_card'> | string;
    collection_id?: UuidWithAggregatesFilter<'collection_card'> | string;
    game_card_id?: UuidWithAggregatesFilter<'collection_card'> | string;
    added_at?: DateTimeWithAggregatesFilter<'collection_card'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'collection_card'> | string;
    purchase_price?: IntNullableWithAggregatesFilter<'collection_card'> | number | null;
    current_value?: IntNullableWithAggregatesFilter<'collection_card'> | number | null;
    condition?: StringNullableWithAggregatesFilter<'collection_card'> | string | null;
    rating?: IntNullableWithAggregatesFilter<'collection_card'> | number | null;
    created_at?: DateTimeWithAggregatesFilter<'collection_card'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'collection_card'> | Date | string;
  };

  export type companyWhereInput = {
    AND?: companyWhereInput | companyWhereInput[];
    OR?: companyWhereInput[];
    NOT?: companyWhereInput | companyWhereInput[];
    id?: UuidFilter<'company'> | string;
    description?: StringNullableFilter<'company'> | string | null;
    address?: StringNullableFilter<'company'> | string | null;
    city?: StringNullableFilter<'company'> | string | null;
    state?: StringNullableFilter<'company'> | string | null;
    zip?: StringNullableFilter<'company'> | string | null;
    name?: StringFilter<'company'> | string;
    created_at?: DateTimeFilter<'company'> | Date | string;
    updated_at?: DateTimeFilter<'company'> | Date | string;
    tenant_id?: StringFilter<'company'> | string;
    game_card?: Game_cardListRelationFilter;
  };

  export type companyOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    city?: SortOrderInput | SortOrder;
    state?: SortOrderInput | SortOrder;
    zip?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
    game_card?: game_cardOrderByRelationAggregateInput;
  };

  export type companyWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: companyWhereInput | companyWhereInput[];
      OR?: companyWhereInput[];
      NOT?: companyWhereInput | companyWhereInput[];
      description?: StringNullableFilter<'company'> | string | null;
      address?: StringNullableFilter<'company'> | string | null;
      city?: StringNullableFilter<'company'> | string | null;
      state?: StringNullableFilter<'company'> | string | null;
      zip?: StringNullableFilter<'company'> | string | null;
      name?: StringFilter<'company'> | string;
      created_at?: DateTimeFilter<'company'> | Date | string;
      updated_at?: DateTimeFilter<'company'> | Date | string;
      tenant_id?: StringFilter<'company'> | string;
      game_card?: Game_cardListRelationFilter;
    },
    'id'
  >;

  export type companyOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    city?: SortOrderInput | SortOrder;
    state?: SortOrderInput | SortOrder;
    zip?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
    _count?: companyCountOrderByAggregateInput;
    _max?: companyMaxOrderByAggregateInput;
    _min?: companyMinOrderByAggregateInput;
  };

  export type companyScalarWhereWithAggregatesInput = {
    AND?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    OR?: companyScalarWhereWithAggregatesInput[];
    NOT?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'company'> | string;
    description?: StringNullableWithAggregatesFilter<'company'> | string | null;
    address?: StringNullableWithAggregatesFilter<'company'> | string | null;
    city?: StringNullableWithAggregatesFilter<'company'> | string | null;
    state?: StringNullableWithAggregatesFilter<'company'> | string | null;
    zip?: StringNullableWithAggregatesFilter<'company'> | string | null;
    name?: StringWithAggregatesFilter<'company'> | string;
    created_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    tenant_id?: StringWithAggregatesFilter<'company'> | string;
  };

  export type game_cardWhereInput = {
    AND?: game_cardWhereInput | game_cardWhereInput[];
    OR?: game_cardWhereInput[];
    NOT?: game_cardWhereInput | game_cardWhereInput[];
    id?: UuidFilter<'game_card'> | string;
    name?: StringFilter<'game_card'> | string;
    description?: StringNullableFilter<'game_card'> | string | null;
    user_id?: UuidFilter<'game_card'> | string;
    company_id?: UuidFilter<'game_card'> | string;
    release_date?: DateTimeNullableFilter<'game_card'> | Date | string | null;
    genre?: StringNullableFilter<'game_card'> | string | null;
    rating?: IntNullableFilter<'game_card'> | number | null;
    created_at?: DateTimeFilter<'game_card'> | Date | string;
    updated_at?: DateTimeFilter<'game_card'> | Date | string;
    collection_card?: Collection_cardListRelationFilter;
    company?: XOR<CompanyRelationFilter, companyWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
    transaction?: TransactionListRelationFilter;
  };

  export type game_cardOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    release_date?: SortOrderInput | SortOrder;
    genre?: SortOrderInput | SortOrder;
    rating?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    collection_card?: collection_cardOrderByRelationAggregateInput;
    company?: companyOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
    transaction?: transactionOrderByRelationAggregateInput;
  };

  export type game_cardWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: game_cardWhereInput | game_cardWhereInput[];
      OR?: game_cardWhereInput[];
      NOT?: game_cardWhereInput | game_cardWhereInput[];
      name?: StringFilter<'game_card'> | string;
      description?: StringNullableFilter<'game_card'> | string | null;
      user_id?: UuidFilter<'game_card'> | string;
      company_id?: UuidFilter<'game_card'> | string;
      release_date?: DateTimeNullableFilter<'game_card'> | Date | string | null;
      genre?: StringNullableFilter<'game_card'> | string | null;
      rating?: IntNullableFilter<'game_card'> | number | null;
      created_at?: DateTimeFilter<'game_card'> | Date | string;
      updated_at?: DateTimeFilter<'game_card'> | Date | string;
      collection_card?: Collection_cardListRelationFilter;
      company?: XOR<CompanyRelationFilter, companyWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
      transaction?: TransactionListRelationFilter;
    },
    'id'
  >;

  export type game_cardOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    release_date?: SortOrderInput | SortOrder;
    genre?: SortOrderInput | SortOrder;
    rating?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: game_cardCountOrderByAggregateInput;
    _avg?: game_cardAvgOrderByAggregateInput;
    _max?: game_cardMaxOrderByAggregateInput;
    _min?: game_cardMinOrderByAggregateInput;
    _sum?: game_cardSumOrderByAggregateInput;
  };

  export type game_cardScalarWhereWithAggregatesInput = {
    AND?: game_cardScalarWhereWithAggregatesInput | game_cardScalarWhereWithAggregatesInput[];
    OR?: game_cardScalarWhereWithAggregatesInput[];
    NOT?: game_cardScalarWhereWithAggregatesInput | game_cardScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'game_card'> | string;
    name?: StringWithAggregatesFilter<'game_card'> | string;
    description?: StringNullableWithAggregatesFilter<'game_card'> | string | null;
    user_id?: UuidWithAggregatesFilter<'game_card'> | string;
    company_id?: UuidWithAggregatesFilter<'game_card'> | string;
    release_date?: DateTimeNullableWithAggregatesFilter<'game_card'> | Date | string | null;
    genre?: StringNullableWithAggregatesFilter<'game_card'> | string | null;
    rating?: IntNullableWithAggregatesFilter<'game_card'> | number | null;
    created_at?: DateTimeWithAggregatesFilter<'game_card'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'game_card'> | Date | string;
  };

  export type transactionWhereInput = {
    AND?: transactionWhereInput | transactionWhereInput[];
    OR?: transactionWhereInput[];
    NOT?: transactionWhereInput | transactionWhereInput[];
    id?: UuidFilter<'transaction'> | string;
    user_id?: UuidFilter<'transaction'> | string;
    game_card_id?: UuidFilter<'transaction'> | string;
    transaction_date?: DateTimeFilter<'transaction'> | Date | string;
    transaction_type?: StringFilter<'transaction'> | string;
    transaction_amount?: IntFilter<'transaction'> | number;
    payment_method?: StringNullableFilter<'transaction'> | string | null;
    billing_address?: StringNullableFilter<'transaction'> | string | null;
    shipping_address?: StringNullableFilter<'transaction'> | string | null;
    status?: StringNullableFilter<'transaction'> | string | null;
    created_at?: DateTimeFilter<'transaction'> | Date | string;
    updated_at?: DateTimeFilter<'transaction'> | Date | string;
    game_card?: XOR<Game_cardRelationFilter, game_cardWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type transactionOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    game_card_id?: SortOrder;
    transaction_date?: SortOrder;
    transaction_type?: SortOrder;
    transaction_amount?: SortOrder;
    payment_method?: SortOrderInput | SortOrder;
    billing_address?: SortOrderInput | SortOrder;
    shipping_address?: SortOrderInput | SortOrder;
    status?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    game_card?: game_cardOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type transactionWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: transactionWhereInput | transactionWhereInput[];
      OR?: transactionWhereInput[];
      NOT?: transactionWhereInput | transactionWhereInput[];
      user_id?: UuidFilter<'transaction'> | string;
      game_card_id?: UuidFilter<'transaction'> | string;
      transaction_date?: DateTimeFilter<'transaction'> | Date | string;
      transaction_type?: StringFilter<'transaction'> | string;
      transaction_amount?: IntFilter<'transaction'> | number;
      payment_method?: StringNullableFilter<'transaction'> | string | null;
      billing_address?: StringNullableFilter<'transaction'> | string | null;
      shipping_address?: StringNullableFilter<'transaction'> | string | null;
      status?: StringNullableFilter<'transaction'> | string | null;
      created_at?: DateTimeFilter<'transaction'> | Date | string;
      updated_at?: DateTimeFilter<'transaction'> | Date | string;
      game_card?: XOR<Game_cardRelationFilter, game_cardWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type transactionOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    game_card_id?: SortOrder;
    transaction_date?: SortOrder;
    transaction_type?: SortOrder;
    transaction_amount?: SortOrder;
    payment_method?: SortOrderInput | SortOrder;
    billing_address?: SortOrderInput | SortOrder;
    shipping_address?: SortOrderInput | SortOrder;
    status?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: transactionCountOrderByAggregateInput;
    _avg?: transactionAvgOrderByAggregateInput;
    _max?: transactionMaxOrderByAggregateInput;
    _min?: transactionMinOrderByAggregateInput;
    _sum?: transactionSumOrderByAggregateInput;
  };

  export type transactionScalarWhereWithAggregatesInput = {
    AND?: transactionScalarWhereWithAggregatesInput | transactionScalarWhereWithAggregatesInput[];
    OR?: transactionScalarWhereWithAggregatesInput[];
    NOT?: transactionScalarWhereWithAggregatesInput | transactionScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'transaction'> | string;
    user_id?: UuidWithAggregatesFilter<'transaction'> | string;
    game_card_id?: UuidWithAggregatesFilter<'transaction'> | string;
    transaction_date?: DateTimeWithAggregatesFilter<'transaction'> | Date | string;
    transaction_type?: StringWithAggregatesFilter<'transaction'> | string;
    transaction_amount?: IntWithAggregatesFilter<'transaction'> | number;
    payment_method?: StringNullableWithAggregatesFilter<'transaction'> | string | null;
    billing_address?: StringNullableWithAggregatesFilter<'transaction'> | string | null;
    shipping_address?: StringNullableWithAggregatesFilter<'transaction'> | string | null;
    status?: StringNullableWithAggregatesFilter<'transaction'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'transaction'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'transaction'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    first_name?: StringNullableFilter<'user'> | string | null;
    last_name?: StringNullableFilter<'user'> | string | null;
    locale?: StringNullableFilter<'user'> | string | null;
    timezone?: StringNullableFilter<'user'> | string | null;
    avatar_url?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    collection?: CollectionListRelationFilter;
    collection_card?: Collection_cardListRelationFilter;
    game_card?: Game_cardListRelationFilter;
    transaction?: TransactionListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    collection?: collectionOrderByRelationAggregateInput;
    collection_card?: collection_cardOrderByRelationAggregateInput;
    game_card?: game_cardOrderByRelationAggregateInput;
    transaction?: transactionOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      first_name?: StringNullableFilter<'user'> | string | null;
      last_name?: StringNullableFilter<'user'> | string | null;
      locale?: StringNullableFilter<'user'> | string | null;
      timezone?: StringNullableFilter<'user'> | string | null;
      avatar_url?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      collection?: CollectionListRelationFilter;
      collection_card?: Collection_cardListRelationFilter;
      game_card?: Game_cardListRelationFilter;
      transaction?: TransactionListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    first_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    last_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    locale?: StringNullableWithAggregatesFilter<'user'> | string | null;
    timezone?: StringNullableWithAggregatesFilter<'user'> | string | null;
    avatar_url?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type collectionCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    total_cards?: number | null;
    total_value?: number | null;
    average_rating?: number | null;
    last_updated_card?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutCollectionInput;
    collection_card?: collection_cardCreateNestedManyWithoutCollectionInput;
  };

  export type collectionUncheckedCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    user_id: string;
    total_cards?: number | null;
    total_value?: number | null;
    average_rating?: number | null;
    last_updated_card?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    collection_card?: collection_cardUncheckedCreateNestedManyWithoutCollectionInput;
  };

  export type collectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    total_cards?: NullableIntFieldUpdateOperationsInput | number | null;
    total_value?: NullableIntFieldUpdateOperationsInput | number | null;
    average_rating?: NullableIntFieldUpdateOperationsInput | number | null;
    last_updated_card?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutCollectionNestedInput;
    collection_card?: collection_cardUpdateManyWithoutCollectionNestedInput;
  };

  export type collectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    total_cards?: NullableIntFieldUpdateOperationsInput | number | null;
    total_value?: NullableIntFieldUpdateOperationsInput | number | null;
    average_rating?: NullableIntFieldUpdateOperationsInput | number | null;
    last_updated_card?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    collection_card?: collection_cardUncheckedUpdateManyWithoutCollectionNestedInput;
  };

  export type collectionCreateManyInput = {
    id?: string;
    name: string;
    description?: string | null;
    user_id: string;
    total_cards?: number | null;
    total_value?: number | null;
    average_rating?: number | null;
    last_updated_card?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type collectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    total_cards?: NullableIntFieldUpdateOperationsInput | number | null;
    total_value?: NullableIntFieldUpdateOperationsInput | number | null;
    average_rating?: NullableIntFieldUpdateOperationsInput | number | null;
    last_updated_card?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type collectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    total_cards?: NullableIntFieldUpdateOperationsInput | number | null;
    total_value?: NullableIntFieldUpdateOperationsInput | number | null;
    average_rating?: NullableIntFieldUpdateOperationsInput | number | null;
    last_updated_card?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type collection_cardCreateInput = {
    id?: string;
    added_at?: Date | string;
    purchase_price?: number | null;
    current_value?: number | null;
    condition?: string | null;
    rating?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    collection: collectionCreateNestedOneWithoutCollection_cardInput;
    game_card: game_cardCreateNestedOneWithoutCollection_cardInput;
    user: userCreateNestedOneWithoutCollection_cardInput;
  };

  export type collection_cardUncheckedCreateInput = {
    id?: string;
    collection_id: string;
    game_card_id: string;
    added_at?: Date | string;
    user_id: string;
    purchase_price?: number | null;
    current_value?: number | null;
    condition?: string | null;
    rating?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type collection_cardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    added_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    purchase_price?: NullableIntFieldUpdateOperationsInput | number | null;
    current_value?: NullableIntFieldUpdateOperationsInput | number | null;
    condition?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    collection?: collectionUpdateOneRequiredWithoutCollection_cardNestedInput;
    game_card?: game_cardUpdateOneRequiredWithoutCollection_cardNestedInput;
    user?: userUpdateOneRequiredWithoutCollection_cardNestedInput;
  };

  export type collection_cardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    collection_id?: StringFieldUpdateOperationsInput | string;
    game_card_id?: StringFieldUpdateOperationsInput | string;
    added_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    purchase_price?: NullableIntFieldUpdateOperationsInput | number | null;
    current_value?: NullableIntFieldUpdateOperationsInput | number | null;
    condition?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type collection_cardCreateManyInput = {
    id?: string;
    collection_id: string;
    game_card_id: string;
    added_at?: Date | string;
    user_id: string;
    purchase_price?: number | null;
    current_value?: number | null;
    condition?: string | null;
    rating?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type collection_cardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    added_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    purchase_price?: NullableIntFieldUpdateOperationsInput | number | null;
    current_value?: NullableIntFieldUpdateOperationsInput | number | null;
    condition?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type collection_cardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    collection_id?: StringFieldUpdateOperationsInput | string;
    game_card_id?: StringFieldUpdateOperationsInput | string;
    added_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    purchase_price?: NullableIntFieldUpdateOperationsInput | number | null;
    current_value?: NullableIntFieldUpdateOperationsInput | number | null;
    condition?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type companyCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    game_card?: game_cardCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    game_card?: game_cardUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    game_card?: game_cardUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    game_card?: game_cardUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type companyCreateManyInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type companyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type game_cardCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    release_date?: Date | string | null;
    genre?: string | null;
    rating?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    collection_card?: collection_cardCreateNestedManyWithoutGame_cardInput;
    company: companyCreateNestedOneWithoutGame_cardInput;
    user: userCreateNestedOneWithoutGame_cardInput;
    transaction?: transactionCreateNestedManyWithoutGame_cardInput;
  };

  export type game_cardUncheckedCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    user_id: string;
    company_id: string;
    release_date?: Date | string | null;
    genre?: string | null;
    rating?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    collection_card?: collection_cardUncheckedCreateNestedManyWithoutGame_cardInput;
    transaction?: transactionUncheckedCreateNestedManyWithoutGame_cardInput;
  };

  export type game_cardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    genre?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    collection_card?: collection_cardUpdateManyWithoutGame_cardNestedInput;
    company?: companyUpdateOneRequiredWithoutGame_cardNestedInput;
    user?: userUpdateOneRequiredWithoutGame_cardNestedInput;
    transaction?: transactionUpdateManyWithoutGame_cardNestedInput;
  };

  export type game_cardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    genre?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    collection_card?: collection_cardUncheckedUpdateManyWithoutGame_cardNestedInput;
    transaction?: transactionUncheckedUpdateManyWithoutGame_cardNestedInput;
  };

  export type game_cardCreateManyInput = {
    id?: string;
    name: string;
    description?: string | null;
    user_id: string;
    company_id: string;
    release_date?: Date | string | null;
    genre?: string | null;
    rating?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type game_cardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    genre?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type game_cardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    genre?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type transactionCreateInput = {
    id?: string;
    transaction_date?: Date | string;
    transaction_type: string;
    transaction_amount: number;
    payment_method?: string | null;
    billing_address?: string | null;
    shipping_address?: string | null;
    status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_card: game_cardCreateNestedOneWithoutTransactionInput;
    user: userCreateNestedOneWithoutTransactionInput;
  };

  export type transactionUncheckedCreateInput = {
    id?: string;
    user_id: string;
    game_card_id: string;
    transaction_date?: Date | string;
    transaction_type: string;
    transaction_amount: number;
    payment_method?: string | null;
    billing_address?: string | null;
    shipping_address?: string | null;
    status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type transactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    transaction_type?: StringFieldUpdateOperationsInput | string;
    transaction_amount?: IntFieldUpdateOperationsInput | number;
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null;
    billing_address?: NullableStringFieldUpdateOperationsInput | string | null;
    shipping_address?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    game_card?: game_cardUpdateOneRequiredWithoutTransactionNestedInput;
    user?: userUpdateOneRequiredWithoutTransactionNestedInput;
  };

  export type transactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    game_card_id?: StringFieldUpdateOperationsInput | string;
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    transaction_type?: StringFieldUpdateOperationsInput | string;
    transaction_amount?: IntFieldUpdateOperationsInput | number;
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null;
    billing_address?: NullableStringFieldUpdateOperationsInput | string | null;
    shipping_address?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type transactionCreateManyInput = {
    id?: string;
    user_id: string;
    game_card_id: string;
    transaction_date?: Date | string;
    transaction_type: string;
    transaction_amount: number;
    payment_method?: string | null;
    billing_address?: string | null;
    shipping_address?: string | null;
    status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type transactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    transaction_type?: StringFieldUpdateOperationsInput | string;
    transaction_amount?: IntFieldUpdateOperationsInput | number;
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null;
    billing_address?: NullableStringFieldUpdateOperationsInput | string | null;
    shipping_address?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type transactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    game_card_id?: StringFieldUpdateOperationsInput | string;
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    transaction_type?: StringFieldUpdateOperationsInput | string;
    transaction_amount?: IntFieldUpdateOperationsInput | number;
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null;
    billing_address?: NullableStringFieldUpdateOperationsInput | string | null;
    shipping_address?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    collection?: collectionCreateNestedManyWithoutUserInput;
    collection_card?: collection_cardCreateNestedManyWithoutUserInput;
    game_card?: game_cardCreateNestedManyWithoutUserInput;
    transaction?: transactionCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    collection?: collectionUncheckedCreateNestedManyWithoutUserInput;
    collection_card?: collection_cardUncheckedCreateNestedManyWithoutUserInput;
    game_card?: game_cardUncheckedCreateNestedManyWithoutUserInput;
    transaction?: transactionUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    collection?: collectionUpdateManyWithoutUserNestedInput;
    collection_card?: collection_cardUpdateManyWithoutUserNestedInput;
    game_card?: game_cardUpdateManyWithoutUserNestedInput;
    transaction?: transactionUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    collection?: collectionUncheckedUpdateManyWithoutUserNestedInput;
    collection_card?: collection_cardUncheckedUpdateManyWithoutUserNestedInput;
    game_card?: game_cardUncheckedUpdateManyWithoutUserNestedInput;
    transaction?: transactionUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type Collection_cardListRelationFilter = {
    every?: collection_cardWhereInput;
    some?: collection_cardWhereInput;
    none?: collection_cardWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type collection_cardOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type collectionCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    user_id?: SortOrder;
    total_cards?: SortOrder;
    total_value?: SortOrder;
    average_rating?: SortOrder;
    last_updated_card?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type collectionAvgOrderByAggregateInput = {
    total_cards?: SortOrder;
    total_value?: SortOrder;
    average_rating?: SortOrder;
  };

  export type collectionMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    user_id?: SortOrder;
    total_cards?: SortOrder;
    total_value?: SortOrder;
    average_rating?: SortOrder;
    last_updated_card?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type collectionMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    user_id?: SortOrder;
    total_cards?: SortOrder;
    total_value?: SortOrder;
    average_rating?: SortOrder;
    last_updated_card?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type collectionSumOrderByAggregateInput = {
    total_cards?: SortOrder;
    total_value?: SortOrder;
    average_rating?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type CollectionRelationFilter = {
    is?: collectionWhereInput;
    isNot?: collectionWhereInput;
  };

  export type Game_cardRelationFilter = {
    is?: game_cardWhereInput;
    isNot?: game_cardWhereInput;
  };

  export type collection_cardCountOrderByAggregateInput = {
    id?: SortOrder;
    collection_id?: SortOrder;
    game_card_id?: SortOrder;
    added_at?: SortOrder;
    user_id?: SortOrder;
    purchase_price?: SortOrder;
    current_value?: SortOrder;
    condition?: SortOrder;
    rating?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type collection_cardAvgOrderByAggregateInput = {
    purchase_price?: SortOrder;
    current_value?: SortOrder;
    rating?: SortOrder;
  };

  export type collection_cardMaxOrderByAggregateInput = {
    id?: SortOrder;
    collection_id?: SortOrder;
    game_card_id?: SortOrder;
    added_at?: SortOrder;
    user_id?: SortOrder;
    purchase_price?: SortOrder;
    current_value?: SortOrder;
    condition?: SortOrder;
    rating?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type collection_cardMinOrderByAggregateInput = {
    id?: SortOrder;
    collection_id?: SortOrder;
    game_card_id?: SortOrder;
    added_at?: SortOrder;
    user_id?: SortOrder;
    purchase_price?: SortOrder;
    current_value?: SortOrder;
    condition?: SortOrder;
    rating?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type collection_cardSumOrderByAggregateInput = {
    purchase_price?: SortOrder;
    current_value?: SortOrder;
    rating?: SortOrder;
  };

  export type Game_cardListRelationFilter = {
    every?: game_cardWhereInput;
    some?: game_cardWhereInput;
    none?: game_cardWhereInput;
  };

  export type game_cardOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type companyCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type CompanyRelationFilter = {
    is?: companyWhereInput;
    isNot?: companyWhereInput;
  };

  export type TransactionListRelationFilter = {
    every?: transactionWhereInput;
    some?: transactionWhereInput;
    none?: transactionWhereInput;
  };

  export type transactionOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type game_cardCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    release_date?: SortOrder;
    genre?: SortOrder;
    rating?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type game_cardAvgOrderByAggregateInput = {
    rating?: SortOrder;
  };

  export type game_cardMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    release_date?: SortOrder;
    genre?: SortOrder;
    rating?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type game_cardMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    release_date?: SortOrder;
    genre?: SortOrder;
    rating?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type game_cardSumOrderByAggregateInput = {
    rating?: SortOrder;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type transactionCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    game_card_id?: SortOrder;
    transaction_date?: SortOrder;
    transaction_type?: SortOrder;
    transaction_amount?: SortOrder;
    payment_method?: SortOrder;
    billing_address?: SortOrder;
    shipping_address?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type transactionAvgOrderByAggregateInput = {
    transaction_amount?: SortOrder;
  };

  export type transactionMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    game_card_id?: SortOrder;
    transaction_date?: SortOrder;
    transaction_type?: SortOrder;
    transaction_amount?: SortOrder;
    payment_method?: SortOrder;
    billing_address?: SortOrder;
    shipping_address?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type transactionMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    game_card_id?: SortOrder;
    transaction_date?: SortOrder;
    transaction_type?: SortOrder;
    transaction_amount?: SortOrder;
    payment_method?: SortOrder;
    billing_address?: SortOrder;
    shipping_address?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type transactionSumOrderByAggregateInput = {
    transaction_amount?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type CollectionListRelationFilter = {
    every?: collectionWhereInput;
    some?: collectionWhereInput;
    none?: collectionWhereInput;
  };

  export type collectionOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userCreateNestedOneWithoutCollectionInput = {
    create?: XOR<userCreateWithoutCollectionInput, userUncheckedCreateWithoutCollectionInput>;
    connectOrCreate?: userCreateOrConnectWithoutCollectionInput;
    connect?: userWhereUniqueInput;
  };

  export type collection_cardCreateNestedManyWithoutCollectionInput = {
    create?:
      | XOR<collection_cardCreateWithoutCollectionInput, collection_cardUncheckedCreateWithoutCollectionInput>
      | collection_cardCreateWithoutCollectionInput[]
      | collection_cardUncheckedCreateWithoutCollectionInput[];
    connectOrCreate?:
      | collection_cardCreateOrConnectWithoutCollectionInput
      | collection_cardCreateOrConnectWithoutCollectionInput[];
    createMany?: collection_cardCreateManyCollectionInputEnvelope;
    connect?: collection_cardWhereUniqueInput | collection_cardWhereUniqueInput[];
  };

  export type collection_cardUncheckedCreateNestedManyWithoutCollectionInput = {
    create?:
      | XOR<collection_cardCreateWithoutCollectionInput, collection_cardUncheckedCreateWithoutCollectionInput>
      | collection_cardCreateWithoutCollectionInput[]
      | collection_cardUncheckedCreateWithoutCollectionInput[];
    connectOrCreate?:
      | collection_cardCreateOrConnectWithoutCollectionInput
      | collection_cardCreateOrConnectWithoutCollectionInput[];
    createMany?: collection_cardCreateManyCollectionInputEnvelope;
    connect?: collection_cardWhereUniqueInput | collection_cardWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type userUpdateOneRequiredWithoutCollectionNestedInput = {
    create?: XOR<userCreateWithoutCollectionInput, userUncheckedCreateWithoutCollectionInput>;
    connectOrCreate?: userCreateOrConnectWithoutCollectionInput;
    upsert?: userUpsertWithoutCollectionInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutCollectionInput, userUpdateWithoutCollectionInput>,
      userUncheckedUpdateWithoutCollectionInput
    >;
  };

  export type collection_cardUpdateManyWithoutCollectionNestedInput = {
    create?:
      | XOR<collection_cardCreateWithoutCollectionInput, collection_cardUncheckedCreateWithoutCollectionInput>
      | collection_cardCreateWithoutCollectionInput[]
      | collection_cardUncheckedCreateWithoutCollectionInput[];
    connectOrCreate?:
      | collection_cardCreateOrConnectWithoutCollectionInput
      | collection_cardCreateOrConnectWithoutCollectionInput[];
    upsert?:
      | collection_cardUpsertWithWhereUniqueWithoutCollectionInput
      | collection_cardUpsertWithWhereUniqueWithoutCollectionInput[];
    createMany?: collection_cardCreateManyCollectionInputEnvelope;
    set?: collection_cardWhereUniqueInput | collection_cardWhereUniqueInput[];
    disconnect?: collection_cardWhereUniqueInput | collection_cardWhereUniqueInput[];
    delete?: collection_cardWhereUniqueInput | collection_cardWhereUniqueInput[];
    connect?: collection_cardWhereUniqueInput | collection_cardWhereUniqueInput[];
    update?:
      | collection_cardUpdateWithWhereUniqueWithoutCollectionInput
      | collection_cardUpdateWithWhereUniqueWithoutCollectionInput[];
    updateMany?:
      | collection_cardUpdateManyWithWhereWithoutCollectionInput
      | collection_cardUpdateManyWithWhereWithoutCollectionInput[];
    deleteMany?: collection_cardScalarWhereInput | collection_cardScalarWhereInput[];
  };

  export type collection_cardUncheckedUpdateManyWithoutCollectionNestedInput = {
    create?:
      | XOR<collection_cardCreateWithoutCollectionInput, collection_cardUncheckedCreateWithoutCollectionInput>
      | collection_cardCreateWithoutCollectionInput[]
      | collection_cardUncheckedCreateWithoutCollectionInput[];
    connectOrCreate?:
      | collection_cardCreateOrConnectWithoutCollectionInput
      | collection_cardCreateOrConnectWithoutCollectionInput[];
    upsert?:
      | collection_cardUpsertWithWhereUniqueWithoutCollectionInput
      | collection_cardUpsertWithWhereUniqueWithoutCollectionInput[];
    createMany?: collection_cardCreateManyCollectionInputEnvelope;
    set?: collection_cardWhereUniqueInput | collection_cardWhereUniqueInput[];
    disconnect?: collection_cardWhereUniqueInput | collection_cardWhereUniqueInput[];
    delete?: collection_cardWhereUniqueInput | collection_cardWhereUniqueInput[];
    connect?: collection_cardWhereUniqueInput | collection_cardWhereUniqueInput[];
    update?:
      | collection_cardUpdateWithWhereUniqueWithoutCollectionInput
      | collection_cardUpdateWithWhereUniqueWithoutCollectionInput[];
    updateMany?:
      | collection_cardUpdateManyWithWhereWithoutCollectionInput
      | collection_cardUpdateManyWithWhereWithoutCollectionInput[];
    deleteMany?: collection_cardScalarWhereInput | collection_cardScalarWhereInput[];
  };

  export type collectionCreateNestedOneWithoutCollection_cardInput = {
    create?: XOR<collectionCreateWithoutCollection_cardInput, collectionUncheckedCreateWithoutCollection_cardInput>;
    connectOrCreate?: collectionCreateOrConnectWithoutCollection_cardInput;
    connect?: collectionWhereUniqueInput;
  };

  export type game_cardCreateNestedOneWithoutCollection_cardInput = {
    create?: XOR<game_cardCreateWithoutCollection_cardInput, game_cardUncheckedCreateWithoutCollection_cardInput>;
    connectOrCreate?: game_cardCreateOrConnectWithoutCollection_cardInput;
    connect?: game_cardWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutCollection_cardInput = {
    create?: XOR<userCreateWithoutCollection_cardInput, userUncheckedCreateWithoutCollection_cardInput>;
    connectOrCreate?: userCreateOrConnectWithoutCollection_cardInput;
    connect?: userWhereUniqueInput;
  };

  export type collectionUpdateOneRequiredWithoutCollection_cardNestedInput = {
    create?: XOR<collectionCreateWithoutCollection_cardInput, collectionUncheckedCreateWithoutCollection_cardInput>;
    connectOrCreate?: collectionCreateOrConnectWithoutCollection_cardInput;
    upsert?: collectionUpsertWithoutCollection_cardInput;
    connect?: collectionWhereUniqueInput;
    update?: XOR<
      XOR<collectionUpdateToOneWithWhereWithoutCollection_cardInput, collectionUpdateWithoutCollection_cardInput>,
      collectionUncheckedUpdateWithoutCollection_cardInput
    >;
  };

  export type game_cardUpdateOneRequiredWithoutCollection_cardNestedInput = {
    create?: XOR<game_cardCreateWithoutCollection_cardInput, game_cardUncheckedCreateWithoutCollection_cardInput>;
    connectOrCreate?: game_cardCreateOrConnectWithoutCollection_cardInput;
    upsert?: game_cardUpsertWithoutCollection_cardInput;
    connect?: game_cardWhereUniqueInput;
    update?: XOR<
      XOR<game_cardUpdateToOneWithWhereWithoutCollection_cardInput, game_cardUpdateWithoutCollection_cardInput>,
      game_cardUncheckedUpdateWithoutCollection_cardInput
    >;
  };

  export type userUpdateOneRequiredWithoutCollection_cardNestedInput = {
    create?: XOR<userCreateWithoutCollection_cardInput, userUncheckedCreateWithoutCollection_cardInput>;
    connectOrCreate?: userCreateOrConnectWithoutCollection_cardInput;
    upsert?: userUpsertWithoutCollection_cardInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutCollection_cardInput, userUpdateWithoutCollection_cardInput>,
      userUncheckedUpdateWithoutCollection_cardInput
    >;
  };

  export type game_cardCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<game_cardCreateWithoutCompanyInput, game_cardUncheckedCreateWithoutCompanyInput>
      | game_cardCreateWithoutCompanyInput[]
      | game_cardUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: game_cardCreateOrConnectWithoutCompanyInput | game_cardCreateOrConnectWithoutCompanyInput[];
    createMany?: game_cardCreateManyCompanyInputEnvelope;
    connect?: game_cardWhereUniqueInput | game_cardWhereUniqueInput[];
  };

  export type game_cardUncheckedCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<game_cardCreateWithoutCompanyInput, game_cardUncheckedCreateWithoutCompanyInput>
      | game_cardCreateWithoutCompanyInput[]
      | game_cardUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: game_cardCreateOrConnectWithoutCompanyInput | game_cardCreateOrConnectWithoutCompanyInput[];
    createMany?: game_cardCreateManyCompanyInputEnvelope;
    connect?: game_cardWhereUniqueInput | game_cardWhereUniqueInput[];
  };

  export type game_cardUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<game_cardCreateWithoutCompanyInput, game_cardUncheckedCreateWithoutCompanyInput>
      | game_cardCreateWithoutCompanyInput[]
      | game_cardUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: game_cardCreateOrConnectWithoutCompanyInput | game_cardCreateOrConnectWithoutCompanyInput[];
    upsert?: game_cardUpsertWithWhereUniqueWithoutCompanyInput | game_cardUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: game_cardCreateManyCompanyInputEnvelope;
    set?: game_cardWhereUniqueInput | game_cardWhereUniqueInput[];
    disconnect?: game_cardWhereUniqueInput | game_cardWhereUniqueInput[];
    delete?: game_cardWhereUniqueInput | game_cardWhereUniqueInput[];
    connect?: game_cardWhereUniqueInput | game_cardWhereUniqueInput[];
    update?: game_cardUpdateWithWhereUniqueWithoutCompanyInput | game_cardUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: game_cardUpdateManyWithWhereWithoutCompanyInput | game_cardUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: game_cardScalarWhereInput | game_cardScalarWhereInput[];
  };

  export type game_cardUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<game_cardCreateWithoutCompanyInput, game_cardUncheckedCreateWithoutCompanyInput>
      | game_cardCreateWithoutCompanyInput[]
      | game_cardUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: game_cardCreateOrConnectWithoutCompanyInput | game_cardCreateOrConnectWithoutCompanyInput[];
    upsert?: game_cardUpsertWithWhereUniqueWithoutCompanyInput | game_cardUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: game_cardCreateManyCompanyInputEnvelope;
    set?: game_cardWhereUniqueInput | game_cardWhereUniqueInput[];
    disconnect?: game_cardWhereUniqueInput | game_cardWhereUniqueInput[];
    delete?: game_cardWhereUniqueInput | game_cardWhereUniqueInput[];
    connect?: game_cardWhereUniqueInput | game_cardWhereUniqueInput[];
    update?: game_cardUpdateWithWhereUniqueWithoutCompanyInput | game_cardUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: game_cardUpdateManyWithWhereWithoutCompanyInput | game_cardUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: game_cardScalarWhereInput | game_cardScalarWhereInput[];
  };

  export type collection_cardCreateNestedManyWithoutGame_cardInput = {
    create?:
      | XOR<collection_cardCreateWithoutGame_cardInput, collection_cardUncheckedCreateWithoutGame_cardInput>
      | collection_cardCreateWithoutGame_cardInput[]
      | collection_cardUncheckedCreateWithoutGame_cardInput[];
    connectOrCreate?:
      | collection_cardCreateOrConnectWithoutGame_cardInput
      | collection_cardCreateOrConnectWithoutGame_cardInput[];
    createMany?: collection_cardCreateManyGame_cardInputEnvelope;
    connect?: collection_cardWhereUniqueInput | collection_cardWhereUniqueInput[];
  };

  export type companyCreateNestedOneWithoutGame_cardInput = {
    create?: XOR<companyCreateWithoutGame_cardInput, companyUncheckedCreateWithoutGame_cardInput>;
    connectOrCreate?: companyCreateOrConnectWithoutGame_cardInput;
    connect?: companyWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutGame_cardInput = {
    create?: XOR<userCreateWithoutGame_cardInput, userUncheckedCreateWithoutGame_cardInput>;
    connectOrCreate?: userCreateOrConnectWithoutGame_cardInput;
    connect?: userWhereUniqueInput;
  };

  export type transactionCreateNestedManyWithoutGame_cardInput = {
    create?:
      | XOR<transactionCreateWithoutGame_cardInput, transactionUncheckedCreateWithoutGame_cardInput>
      | transactionCreateWithoutGame_cardInput[]
      | transactionUncheckedCreateWithoutGame_cardInput[];
    connectOrCreate?:
      | transactionCreateOrConnectWithoutGame_cardInput
      | transactionCreateOrConnectWithoutGame_cardInput[];
    createMany?: transactionCreateManyGame_cardInputEnvelope;
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[];
  };

  export type collection_cardUncheckedCreateNestedManyWithoutGame_cardInput = {
    create?:
      | XOR<collection_cardCreateWithoutGame_cardInput, collection_cardUncheckedCreateWithoutGame_cardInput>
      | collection_cardCreateWithoutGame_cardInput[]
      | collection_cardUncheckedCreateWithoutGame_cardInput[];
    connectOrCreate?:
      | collection_cardCreateOrConnectWithoutGame_cardInput
      | collection_cardCreateOrConnectWithoutGame_cardInput[];
    createMany?: collection_cardCreateManyGame_cardInputEnvelope;
    connect?: collection_cardWhereUniqueInput | collection_cardWhereUniqueInput[];
  };

  export type transactionUncheckedCreateNestedManyWithoutGame_cardInput = {
    create?:
      | XOR<transactionCreateWithoutGame_cardInput, transactionUncheckedCreateWithoutGame_cardInput>
      | transactionCreateWithoutGame_cardInput[]
      | transactionUncheckedCreateWithoutGame_cardInput[];
    connectOrCreate?:
      | transactionCreateOrConnectWithoutGame_cardInput
      | transactionCreateOrConnectWithoutGame_cardInput[];
    createMany?: transactionCreateManyGame_cardInputEnvelope;
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[];
  };

  export type collection_cardUpdateManyWithoutGame_cardNestedInput = {
    create?:
      | XOR<collection_cardCreateWithoutGame_cardInput, collection_cardUncheckedCreateWithoutGame_cardInput>
      | collection_cardCreateWithoutGame_cardInput[]
      | collection_cardUncheckedCreateWithoutGame_cardInput[];
    connectOrCreate?:
      | collection_cardCreateOrConnectWithoutGame_cardInput
      | collection_cardCreateOrConnectWithoutGame_cardInput[];
    upsert?:
      | collection_cardUpsertWithWhereUniqueWithoutGame_cardInput
      | collection_cardUpsertWithWhereUniqueWithoutGame_cardInput[];
    createMany?: collection_cardCreateManyGame_cardInputEnvelope;
    set?: collection_cardWhereUniqueInput | collection_cardWhereUniqueInput[];
    disconnect?: collection_cardWhereUniqueInput | collection_cardWhereUniqueInput[];
    delete?: collection_cardWhereUniqueInput | collection_cardWhereUniqueInput[];
    connect?: collection_cardWhereUniqueInput | collection_cardWhereUniqueInput[];
    update?:
      | collection_cardUpdateWithWhereUniqueWithoutGame_cardInput
      | collection_cardUpdateWithWhereUniqueWithoutGame_cardInput[];
    updateMany?:
      | collection_cardUpdateManyWithWhereWithoutGame_cardInput
      | collection_cardUpdateManyWithWhereWithoutGame_cardInput[];
    deleteMany?: collection_cardScalarWhereInput | collection_cardScalarWhereInput[];
  };

  export type companyUpdateOneRequiredWithoutGame_cardNestedInput = {
    create?: XOR<companyCreateWithoutGame_cardInput, companyUncheckedCreateWithoutGame_cardInput>;
    connectOrCreate?: companyCreateOrConnectWithoutGame_cardInput;
    upsert?: companyUpsertWithoutGame_cardInput;
    connect?: companyWhereUniqueInput;
    update?: XOR<
      XOR<companyUpdateToOneWithWhereWithoutGame_cardInput, companyUpdateWithoutGame_cardInput>,
      companyUncheckedUpdateWithoutGame_cardInput
    >;
  };

  export type userUpdateOneRequiredWithoutGame_cardNestedInput = {
    create?: XOR<userCreateWithoutGame_cardInput, userUncheckedCreateWithoutGame_cardInput>;
    connectOrCreate?: userCreateOrConnectWithoutGame_cardInput;
    upsert?: userUpsertWithoutGame_cardInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutGame_cardInput, userUpdateWithoutGame_cardInput>,
      userUncheckedUpdateWithoutGame_cardInput
    >;
  };

  export type transactionUpdateManyWithoutGame_cardNestedInput = {
    create?:
      | XOR<transactionCreateWithoutGame_cardInput, transactionUncheckedCreateWithoutGame_cardInput>
      | transactionCreateWithoutGame_cardInput[]
      | transactionUncheckedCreateWithoutGame_cardInput[];
    connectOrCreate?:
      | transactionCreateOrConnectWithoutGame_cardInput
      | transactionCreateOrConnectWithoutGame_cardInput[];
    upsert?:
      | transactionUpsertWithWhereUniqueWithoutGame_cardInput
      | transactionUpsertWithWhereUniqueWithoutGame_cardInput[];
    createMany?: transactionCreateManyGame_cardInputEnvelope;
    set?: transactionWhereUniqueInput | transactionWhereUniqueInput[];
    disconnect?: transactionWhereUniqueInput | transactionWhereUniqueInput[];
    delete?: transactionWhereUniqueInput | transactionWhereUniqueInput[];
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[];
    update?:
      | transactionUpdateWithWhereUniqueWithoutGame_cardInput
      | transactionUpdateWithWhereUniqueWithoutGame_cardInput[];
    updateMany?:
      | transactionUpdateManyWithWhereWithoutGame_cardInput
      | transactionUpdateManyWithWhereWithoutGame_cardInput[];
    deleteMany?: transactionScalarWhereInput | transactionScalarWhereInput[];
  };

  export type collection_cardUncheckedUpdateManyWithoutGame_cardNestedInput = {
    create?:
      | XOR<collection_cardCreateWithoutGame_cardInput, collection_cardUncheckedCreateWithoutGame_cardInput>
      | collection_cardCreateWithoutGame_cardInput[]
      | collection_cardUncheckedCreateWithoutGame_cardInput[];
    connectOrCreate?:
      | collection_cardCreateOrConnectWithoutGame_cardInput
      | collection_cardCreateOrConnectWithoutGame_cardInput[];
    upsert?:
      | collection_cardUpsertWithWhereUniqueWithoutGame_cardInput
      | collection_cardUpsertWithWhereUniqueWithoutGame_cardInput[];
    createMany?: collection_cardCreateManyGame_cardInputEnvelope;
    set?: collection_cardWhereUniqueInput | collection_cardWhereUniqueInput[];
    disconnect?: collection_cardWhereUniqueInput | collection_cardWhereUniqueInput[];
    delete?: collection_cardWhereUniqueInput | collection_cardWhereUniqueInput[];
    connect?: collection_cardWhereUniqueInput | collection_cardWhereUniqueInput[];
    update?:
      | collection_cardUpdateWithWhereUniqueWithoutGame_cardInput
      | collection_cardUpdateWithWhereUniqueWithoutGame_cardInput[];
    updateMany?:
      | collection_cardUpdateManyWithWhereWithoutGame_cardInput
      | collection_cardUpdateManyWithWhereWithoutGame_cardInput[];
    deleteMany?: collection_cardScalarWhereInput | collection_cardScalarWhereInput[];
  };

  export type transactionUncheckedUpdateManyWithoutGame_cardNestedInput = {
    create?:
      | XOR<transactionCreateWithoutGame_cardInput, transactionUncheckedCreateWithoutGame_cardInput>
      | transactionCreateWithoutGame_cardInput[]
      | transactionUncheckedCreateWithoutGame_cardInput[];
    connectOrCreate?:
      | transactionCreateOrConnectWithoutGame_cardInput
      | transactionCreateOrConnectWithoutGame_cardInput[];
    upsert?:
      | transactionUpsertWithWhereUniqueWithoutGame_cardInput
      | transactionUpsertWithWhereUniqueWithoutGame_cardInput[];
    createMany?: transactionCreateManyGame_cardInputEnvelope;
    set?: transactionWhereUniqueInput | transactionWhereUniqueInput[];
    disconnect?: transactionWhereUniqueInput | transactionWhereUniqueInput[];
    delete?: transactionWhereUniqueInput | transactionWhereUniqueInput[];
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[];
    update?:
      | transactionUpdateWithWhereUniqueWithoutGame_cardInput
      | transactionUpdateWithWhereUniqueWithoutGame_cardInput[];
    updateMany?:
      | transactionUpdateManyWithWhereWithoutGame_cardInput
      | transactionUpdateManyWithWhereWithoutGame_cardInput[];
    deleteMany?: transactionScalarWhereInput | transactionScalarWhereInput[];
  };

  export type game_cardCreateNestedOneWithoutTransactionInput = {
    create?: XOR<game_cardCreateWithoutTransactionInput, game_cardUncheckedCreateWithoutTransactionInput>;
    connectOrCreate?: game_cardCreateOrConnectWithoutTransactionInput;
    connect?: game_cardWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutTransactionInput = {
    create?: XOR<userCreateWithoutTransactionInput, userUncheckedCreateWithoutTransactionInput>;
    connectOrCreate?: userCreateOrConnectWithoutTransactionInput;
    connect?: userWhereUniqueInput;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type game_cardUpdateOneRequiredWithoutTransactionNestedInput = {
    create?: XOR<game_cardCreateWithoutTransactionInput, game_cardUncheckedCreateWithoutTransactionInput>;
    connectOrCreate?: game_cardCreateOrConnectWithoutTransactionInput;
    upsert?: game_cardUpsertWithoutTransactionInput;
    connect?: game_cardWhereUniqueInput;
    update?: XOR<
      XOR<game_cardUpdateToOneWithWhereWithoutTransactionInput, game_cardUpdateWithoutTransactionInput>,
      game_cardUncheckedUpdateWithoutTransactionInput
    >;
  };

  export type userUpdateOneRequiredWithoutTransactionNestedInput = {
    create?: XOR<userCreateWithoutTransactionInput, userUncheckedCreateWithoutTransactionInput>;
    connectOrCreate?: userCreateOrConnectWithoutTransactionInput;
    upsert?: userUpsertWithoutTransactionInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutTransactionInput, userUpdateWithoutTransactionInput>,
      userUncheckedUpdateWithoutTransactionInput
    >;
  };

  export type collectionCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<collectionCreateWithoutUserInput, collectionUncheckedCreateWithoutUserInput>
      | collectionCreateWithoutUserInput[]
      | collectionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: collectionCreateOrConnectWithoutUserInput | collectionCreateOrConnectWithoutUserInput[];
    createMany?: collectionCreateManyUserInputEnvelope;
    connect?: collectionWhereUniqueInput | collectionWhereUniqueInput[];
  };

  export type collection_cardCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<collection_cardCreateWithoutUserInput, collection_cardUncheckedCreateWithoutUserInput>
      | collection_cardCreateWithoutUserInput[]
      | collection_cardUncheckedCreateWithoutUserInput[];
    connectOrCreate?: collection_cardCreateOrConnectWithoutUserInput | collection_cardCreateOrConnectWithoutUserInput[];
    createMany?: collection_cardCreateManyUserInputEnvelope;
    connect?: collection_cardWhereUniqueInput | collection_cardWhereUniqueInput[];
  };

  export type game_cardCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<game_cardCreateWithoutUserInput, game_cardUncheckedCreateWithoutUserInput>
      | game_cardCreateWithoutUserInput[]
      | game_cardUncheckedCreateWithoutUserInput[];
    connectOrCreate?: game_cardCreateOrConnectWithoutUserInput | game_cardCreateOrConnectWithoutUserInput[];
    createMany?: game_cardCreateManyUserInputEnvelope;
    connect?: game_cardWhereUniqueInput | game_cardWhereUniqueInput[];
  };

  export type transactionCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<transactionCreateWithoutUserInput, transactionUncheckedCreateWithoutUserInput>
      | transactionCreateWithoutUserInput[]
      | transactionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: transactionCreateOrConnectWithoutUserInput | transactionCreateOrConnectWithoutUserInput[];
    createMany?: transactionCreateManyUserInputEnvelope;
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[];
  };

  export type collectionUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<collectionCreateWithoutUserInput, collectionUncheckedCreateWithoutUserInput>
      | collectionCreateWithoutUserInput[]
      | collectionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: collectionCreateOrConnectWithoutUserInput | collectionCreateOrConnectWithoutUserInput[];
    createMany?: collectionCreateManyUserInputEnvelope;
    connect?: collectionWhereUniqueInput | collectionWhereUniqueInput[];
  };

  export type collection_cardUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<collection_cardCreateWithoutUserInput, collection_cardUncheckedCreateWithoutUserInput>
      | collection_cardCreateWithoutUserInput[]
      | collection_cardUncheckedCreateWithoutUserInput[];
    connectOrCreate?: collection_cardCreateOrConnectWithoutUserInput | collection_cardCreateOrConnectWithoutUserInput[];
    createMany?: collection_cardCreateManyUserInputEnvelope;
    connect?: collection_cardWhereUniqueInput | collection_cardWhereUniqueInput[];
  };

  export type game_cardUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<game_cardCreateWithoutUserInput, game_cardUncheckedCreateWithoutUserInput>
      | game_cardCreateWithoutUserInput[]
      | game_cardUncheckedCreateWithoutUserInput[];
    connectOrCreate?: game_cardCreateOrConnectWithoutUserInput | game_cardCreateOrConnectWithoutUserInput[];
    createMany?: game_cardCreateManyUserInputEnvelope;
    connect?: game_cardWhereUniqueInput | game_cardWhereUniqueInput[];
  };

  export type transactionUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<transactionCreateWithoutUserInput, transactionUncheckedCreateWithoutUserInput>
      | transactionCreateWithoutUserInput[]
      | transactionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: transactionCreateOrConnectWithoutUserInput | transactionCreateOrConnectWithoutUserInput[];
    createMany?: transactionCreateManyUserInputEnvelope;
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[];
  };

  export type collectionUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<collectionCreateWithoutUserInput, collectionUncheckedCreateWithoutUserInput>
      | collectionCreateWithoutUserInput[]
      | collectionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: collectionCreateOrConnectWithoutUserInput | collectionCreateOrConnectWithoutUserInput[];
    upsert?: collectionUpsertWithWhereUniqueWithoutUserInput | collectionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: collectionCreateManyUserInputEnvelope;
    set?: collectionWhereUniqueInput | collectionWhereUniqueInput[];
    disconnect?: collectionWhereUniqueInput | collectionWhereUniqueInput[];
    delete?: collectionWhereUniqueInput | collectionWhereUniqueInput[];
    connect?: collectionWhereUniqueInput | collectionWhereUniqueInput[];
    update?: collectionUpdateWithWhereUniqueWithoutUserInput | collectionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: collectionUpdateManyWithWhereWithoutUserInput | collectionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: collectionScalarWhereInput | collectionScalarWhereInput[];
  };

  export type collection_cardUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<collection_cardCreateWithoutUserInput, collection_cardUncheckedCreateWithoutUserInput>
      | collection_cardCreateWithoutUserInput[]
      | collection_cardUncheckedCreateWithoutUserInput[];
    connectOrCreate?: collection_cardCreateOrConnectWithoutUserInput | collection_cardCreateOrConnectWithoutUserInput[];
    upsert?:
      | collection_cardUpsertWithWhereUniqueWithoutUserInput
      | collection_cardUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: collection_cardCreateManyUserInputEnvelope;
    set?: collection_cardWhereUniqueInput | collection_cardWhereUniqueInput[];
    disconnect?: collection_cardWhereUniqueInput | collection_cardWhereUniqueInput[];
    delete?: collection_cardWhereUniqueInput | collection_cardWhereUniqueInput[];
    connect?: collection_cardWhereUniqueInput | collection_cardWhereUniqueInput[];
    update?:
      | collection_cardUpdateWithWhereUniqueWithoutUserInput
      | collection_cardUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | collection_cardUpdateManyWithWhereWithoutUserInput
      | collection_cardUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: collection_cardScalarWhereInput | collection_cardScalarWhereInput[];
  };

  export type game_cardUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<game_cardCreateWithoutUserInput, game_cardUncheckedCreateWithoutUserInput>
      | game_cardCreateWithoutUserInput[]
      | game_cardUncheckedCreateWithoutUserInput[];
    connectOrCreate?: game_cardCreateOrConnectWithoutUserInput | game_cardCreateOrConnectWithoutUserInput[];
    upsert?: game_cardUpsertWithWhereUniqueWithoutUserInput | game_cardUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: game_cardCreateManyUserInputEnvelope;
    set?: game_cardWhereUniqueInput | game_cardWhereUniqueInput[];
    disconnect?: game_cardWhereUniqueInput | game_cardWhereUniqueInput[];
    delete?: game_cardWhereUniqueInput | game_cardWhereUniqueInput[];
    connect?: game_cardWhereUniqueInput | game_cardWhereUniqueInput[];
    update?: game_cardUpdateWithWhereUniqueWithoutUserInput | game_cardUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: game_cardUpdateManyWithWhereWithoutUserInput | game_cardUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: game_cardScalarWhereInput | game_cardScalarWhereInput[];
  };

  export type transactionUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<transactionCreateWithoutUserInput, transactionUncheckedCreateWithoutUserInput>
      | transactionCreateWithoutUserInput[]
      | transactionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: transactionCreateOrConnectWithoutUserInput | transactionCreateOrConnectWithoutUserInput[];
    upsert?: transactionUpsertWithWhereUniqueWithoutUserInput | transactionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: transactionCreateManyUserInputEnvelope;
    set?: transactionWhereUniqueInput | transactionWhereUniqueInput[];
    disconnect?: transactionWhereUniqueInput | transactionWhereUniqueInput[];
    delete?: transactionWhereUniqueInput | transactionWhereUniqueInput[];
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[];
    update?: transactionUpdateWithWhereUniqueWithoutUserInput | transactionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: transactionUpdateManyWithWhereWithoutUserInput | transactionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: transactionScalarWhereInput | transactionScalarWhereInput[];
  };

  export type collectionUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<collectionCreateWithoutUserInput, collectionUncheckedCreateWithoutUserInput>
      | collectionCreateWithoutUserInput[]
      | collectionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: collectionCreateOrConnectWithoutUserInput | collectionCreateOrConnectWithoutUserInput[];
    upsert?: collectionUpsertWithWhereUniqueWithoutUserInput | collectionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: collectionCreateManyUserInputEnvelope;
    set?: collectionWhereUniqueInput | collectionWhereUniqueInput[];
    disconnect?: collectionWhereUniqueInput | collectionWhereUniqueInput[];
    delete?: collectionWhereUniqueInput | collectionWhereUniqueInput[];
    connect?: collectionWhereUniqueInput | collectionWhereUniqueInput[];
    update?: collectionUpdateWithWhereUniqueWithoutUserInput | collectionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: collectionUpdateManyWithWhereWithoutUserInput | collectionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: collectionScalarWhereInput | collectionScalarWhereInput[];
  };

  export type collection_cardUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<collection_cardCreateWithoutUserInput, collection_cardUncheckedCreateWithoutUserInput>
      | collection_cardCreateWithoutUserInput[]
      | collection_cardUncheckedCreateWithoutUserInput[];
    connectOrCreate?: collection_cardCreateOrConnectWithoutUserInput | collection_cardCreateOrConnectWithoutUserInput[];
    upsert?:
      | collection_cardUpsertWithWhereUniqueWithoutUserInput
      | collection_cardUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: collection_cardCreateManyUserInputEnvelope;
    set?: collection_cardWhereUniqueInput | collection_cardWhereUniqueInput[];
    disconnect?: collection_cardWhereUniqueInput | collection_cardWhereUniqueInput[];
    delete?: collection_cardWhereUniqueInput | collection_cardWhereUniqueInput[];
    connect?: collection_cardWhereUniqueInput | collection_cardWhereUniqueInput[];
    update?:
      | collection_cardUpdateWithWhereUniqueWithoutUserInput
      | collection_cardUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | collection_cardUpdateManyWithWhereWithoutUserInput
      | collection_cardUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: collection_cardScalarWhereInput | collection_cardScalarWhereInput[];
  };

  export type game_cardUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<game_cardCreateWithoutUserInput, game_cardUncheckedCreateWithoutUserInput>
      | game_cardCreateWithoutUserInput[]
      | game_cardUncheckedCreateWithoutUserInput[];
    connectOrCreate?: game_cardCreateOrConnectWithoutUserInput | game_cardCreateOrConnectWithoutUserInput[];
    upsert?: game_cardUpsertWithWhereUniqueWithoutUserInput | game_cardUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: game_cardCreateManyUserInputEnvelope;
    set?: game_cardWhereUniqueInput | game_cardWhereUniqueInput[];
    disconnect?: game_cardWhereUniqueInput | game_cardWhereUniqueInput[];
    delete?: game_cardWhereUniqueInput | game_cardWhereUniqueInput[];
    connect?: game_cardWhereUniqueInput | game_cardWhereUniqueInput[];
    update?: game_cardUpdateWithWhereUniqueWithoutUserInput | game_cardUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: game_cardUpdateManyWithWhereWithoutUserInput | game_cardUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: game_cardScalarWhereInput | game_cardScalarWhereInput[];
  };

  export type transactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<transactionCreateWithoutUserInput, transactionUncheckedCreateWithoutUserInput>
      | transactionCreateWithoutUserInput[]
      | transactionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: transactionCreateOrConnectWithoutUserInput | transactionCreateOrConnectWithoutUserInput[];
    upsert?: transactionUpsertWithWhereUniqueWithoutUserInput | transactionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: transactionCreateManyUserInputEnvelope;
    set?: transactionWhereUniqueInput | transactionWhereUniqueInput[];
    disconnect?: transactionWhereUniqueInput | transactionWhereUniqueInput[];
    delete?: transactionWhereUniqueInput | transactionWhereUniqueInput[];
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[];
    update?: transactionUpdateWithWhereUniqueWithoutUserInput | transactionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: transactionUpdateManyWithWhereWithoutUserInput | transactionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: transactionScalarWhereInput | transactionScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type userCreateWithoutCollectionInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    collection_card?: collection_cardCreateNestedManyWithoutUserInput;
    game_card?: game_cardCreateNestedManyWithoutUserInput;
    transaction?: transactionCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutCollectionInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    collection_card?: collection_cardUncheckedCreateNestedManyWithoutUserInput;
    game_card?: game_cardUncheckedCreateNestedManyWithoutUserInput;
    transaction?: transactionUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutCollectionInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutCollectionInput, userUncheckedCreateWithoutCollectionInput>;
  };

  export type collection_cardCreateWithoutCollectionInput = {
    id?: string;
    added_at?: Date | string;
    purchase_price?: number | null;
    current_value?: number | null;
    condition?: string | null;
    rating?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_card: game_cardCreateNestedOneWithoutCollection_cardInput;
    user: userCreateNestedOneWithoutCollection_cardInput;
  };

  export type collection_cardUncheckedCreateWithoutCollectionInput = {
    id?: string;
    game_card_id: string;
    added_at?: Date | string;
    user_id: string;
    purchase_price?: number | null;
    current_value?: number | null;
    condition?: string | null;
    rating?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type collection_cardCreateOrConnectWithoutCollectionInput = {
    where: collection_cardWhereUniqueInput;
    create: XOR<collection_cardCreateWithoutCollectionInput, collection_cardUncheckedCreateWithoutCollectionInput>;
  };

  export type collection_cardCreateManyCollectionInputEnvelope = {
    data: collection_cardCreateManyCollectionInput | collection_cardCreateManyCollectionInput[];
    skipDuplicates?: boolean;
  };

  export type userUpsertWithoutCollectionInput = {
    update: XOR<userUpdateWithoutCollectionInput, userUncheckedUpdateWithoutCollectionInput>;
    create: XOR<userCreateWithoutCollectionInput, userUncheckedCreateWithoutCollectionInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutCollectionInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutCollectionInput, userUncheckedUpdateWithoutCollectionInput>;
  };

  export type userUpdateWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    collection_card?: collection_cardUpdateManyWithoutUserNestedInput;
    game_card?: game_cardUpdateManyWithoutUserNestedInput;
    transaction?: transactionUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    collection_card?: collection_cardUncheckedUpdateManyWithoutUserNestedInput;
    game_card?: game_cardUncheckedUpdateManyWithoutUserNestedInput;
    transaction?: transactionUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type collection_cardUpsertWithWhereUniqueWithoutCollectionInput = {
    where: collection_cardWhereUniqueInput;
    update: XOR<collection_cardUpdateWithoutCollectionInput, collection_cardUncheckedUpdateWithoutCollectionInput>;
    create: XOR<collection_cardCreateWithoutCollectionInput, collection_cardUncheckedCreateWithoutCollectionInput>;
  };

  export type collection_cardUpdateWithWhereUniqueWithoutCollectionInput = {
    where: collection_cardWhereUniqueInput;
    data: XOR<collection_cardUpdateWithoutCollectionInput, collection_cardUncheckedUpdateWithoutCollectionInput>;
  };

  export type collection_cardUpdateManyWithWhereWithoutCollectionInput = {
    where: collection_cardScalarWhereInput;
    data: XOR<collection_cardUpdateManyMutationInput, collection_cardUncheckedUpdateManyWithoutCollectionInput>;
  };

  export type collection_cardScalarWhereInput = {
    AND?: collection_cardScalarWhereInput | collection_cardScalarWhereInput[];
    OR?: collection_cardScalarWhereInput[];
    NOT?: collection_cardScalarWhereInput | collection_cardScalarWhereInput[];
    id?: UuidFilter<'collection_card'> | string;
    collection_id?: UuidFilter<'collection_card'> | string;
    game_card_id?: UuidFilter<'collection_card'> | string;
    added_at?: DateTimeFilter<'collection_card'> | Date | string;
    user_id?: UuidFilter<'collection_card'> | string;
    purchase_price?: IntNullableFilter<'collection_card'> | number | null;
    current_value?: IntNullableFilter<'collection_card'> | number | null;
    condition?: StringNullableFilter<'collection_card'> | string | null;
    rating?: IntNullableFilter<'collection_card'> | number | null;
    created_at?: DateTimeFilter<'collection_card'> | Date | string;
    updated_at?: DateTimeFilter<'collection_card'> | Date | string;
  };

  export type collectionCreateWithoutCollection_cardInput = {
    id?: string;
    name: string;
    description?: string | null;
    total_cards?: number | null;
    total_value?: number | null;
    average_rating?: number | null;
    last_updated_card?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutCollectionInput;
  };

  export type collectionUncheckedCreateWithoutCollection_cardInput = {
    id?: string;
    name: string;
    description?: string | null;
    user_id: string;
    total_cards?: number | null;
    total_value?: number | null;
    average_rating?: number | null;
    last_updated_card?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type collectionCreateOrConnectWithoutCollection_cardInput = {
    where: collectionWhereUniqueInput;
    create: XOR<collectionCreateWithoutCollection_cardInput, collectionUncheckedCreateWithoutCollection_cardInput>;
  };

  export type game_cardCreateWithoutCollection_cardInput = {
    id?: string;
    name: string;
    description?: string | null;
    release_date?: Date | string | null;
    genre?: string | null;
    rating?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutGame_cardInput;
    user: userCreateNestedOneWithoutGame_cardInput;
    transaction?: transactionCreateNestedManyWithoutGame_cardInput;
  };

  export type game_cardUncheckedCreateWithoutCollection_cardInput = {
    id?: string;
    name: string;
    description?: string | null;
    user_id: string;
    company_id: string;
    release_date?: Date | string | null;
    genre?: string | null;
    rating?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    transaction?: transactionUncheckedCreateNestedManyWithoutGame_cardInput;
  };

  export type game_cardCreateOrConnectWithoutCollection_cardInput = {
    where: game_cardWhereUniqueInput;
    create: XOR<game_cardCreateWithoutCollection_cardInput, game_cardUncheckedCreateWithoutCollection_cardInput>;
  };

  export type userCreateWithoutCollection_cardInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    collection?: collectionCreateNestedManyWithoutUserInput;
    game_card?: game_cardCreateNestedManyWithoutUserInput;
    transaction?: transactionCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutCollection_cardInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    collection?: collectionUncheckedCreateNestedManyWithoutUserInput;
    game_card?: game_cardUncheckedCreateNestedManyWithoutUserInput;
    transaction?: transactionUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutCollection_cardInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutCollection_cardInput, userUncheckedCreateWithoutCollection_cardInput>;
  };

  export type collectionUpsertWithoutCollection_cardInput = {
    update: XOR<collectionUpdateWithoutCollection_cardInput, collectionUncheckedUpdateWithoutCollection_cardInput>;
    create: XOR<collectionCreateWithoutCollection_cardInput, collectionUncheckedCreateWithoutCollection_cardInput>;
    where?: collectionWhereInput;
  };

  export type collectionUpdateToOneWithWhereWithoutCollection_cardInput = {
    where?: collectionWhereInput;
    data: XOR<collectionUpdateWithoutCollection_cardInput, collectionUncheckedUpdateWithoutCollection_cardInput>;
  };

  export type collectionUpdateWithoutCollection_cardInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    total_cards?: NullableIntFieldUpdateOperationsInput | number | null;
    total_value?: NullableIntFieldUpdateOperationsInput | number | null;
    average_rating?: NullableIntFieldUpdateOperationsInput | number | null;
    last_updated_card?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutCollectionNestedInput;
  };

  export type collectionUncheckedUpdateWithoutCollection_cardInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    total_cards?: NullableIntFieldUpdateOperationsInput | number | null;
    total_value?: NullableIntFieldUpdateOperationsInput | number | null;
    average_rating?: NullableIntFieldUpdateOperationsInput | number | null;
    last_updated_card?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type game_cardUpsertWithoutCollection_cardInput = {
    update: XOR<game_cardUpdateWithoutCollection_cardInput, game_cardUncheckedUpdateWithoutCollection_cardInput>;
    create: XOR<game_cardCreateWithoutCollection_cardInput, game_cardUncheckedCreateWithoutCollection_cardInput>;
    where?: game_cardWhereInput;
  };

  export type game_cardUpdateToOneWithWhereWithoutCollection_cardInput = {
    where?: game_cardWhereInput;
    data: XOR<game_cardUpdateWithoutCollection_cardInput, game_cardUncheckedUpdateWithoutCollection_cardInput>;
  };

  export type game_cardUpdateWithoutCollection_cardInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    genre?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutGame_cardNestedInput;
    user?: userUpdateOneRequiredWithoutGame_cardNestedInput;
    transaction?: transactionUpdateManyWithoutGame_cardNestedInput;
  };

  export type game_cardUncheckedUpdateWithoutCollection_cardInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    genre?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    transaction?: transactionUncheckedUpdateManyWithoutGame_cardNestedInput;
  };

  export type userUpsertWithoutCollection_cardInput = {
    update: XOR<userUpdateWithoutCollection_cardInput, userUncheckedUpdateWithoutCollection_cardInput>;
    create: XOR<userCreateWithoutCollection_cardInput, userUncheckedCreateWithoutCollection_cardInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutCollection_cardInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutCollection_cardInput, userUncheckedUpdateWithoutCollection_cardInput>;
  };

  export type userUpdateWithoutCollection_cardInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    collection?: collectionUpdateManyWithoutUserNestedInput;
    game_card?: game_cardUpdateManyWithoutUserNestedInput;
    transaction?: transactionUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutCollection_cardInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    collection?: collectionUncheckedUpdateManyWithoutUserNestedInput;
    game_card?: game_cardUncheckedUpdateManyWithoutUserNestedInput;
    transaction?: transactionUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type game_cardCreateWithoutCompanyInput = {
    id?: string;
    name: string;
    description?: string | null;
    release_date?: Date | string | null;
    genre?: string | null;
    rating?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    collection_card?: collection_cardCreateNestedManyWithoutGame_cardInput;
    user: userCreateNestedOneWithoutGame_cardInput;
    transaction?: transactionCreateNestedManyWithoutGame_cardInput;
  };

  export type game_cardUncheckedCreateWithoutCompanyInput = {
    id?: string;
    name: string;
    description?: string | null;
    user_id: string;
    release_date?: Date | string | null;
    genre?: string | null;
    rating?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    collection_card?: collection_cardUncheckedCreateNestedManyWithoutGame_cardInput;
    transaction?: transactionUncheckedCreateNestedManyWithoutGame_cardInput;
  };

  export type game_cardCreateOrConnectWithoutCompanyInput = {
    where: game_cardWhereUniqueInput;
    create: XOR<game_cardCreateWithoutCompanyInput, game_cardUncheckedCreateWithoutCompanyInput>;
  };

  export type game_cardCreateManyCompanyInputEnvelope = {
    data: game_cardCreateManyCompanyInput | game_cardCreateManyCompanyInput[];
    skipDuplicates?: boolean;
  };

  export type game_cardUpsertWithWhereUniqueWithoutCompanyInput = {
    where: game_cardWhereUniqueInput;
    update: XOR<game_cardUpdateWithoutCompanyInput, game_cardUncheckedUpdateWithoutCompanyInput>;
    create: XOR<game_cardCreateWithoutCompanyInput, game_cardUncheckedCreateWithoutCompanyInput>;
  };

  export type game_cardUpdateWithWhereUniqueWithoutCompanyInput = {
    where: game_cardWhereUniqueInput;
    data: XOR<game_cardUpdateWithoutCompanyInput, game_cardUncheckedUpdateWithoutCompanyInput>;
  };

  export type game_cardUpdateManyWithWhereWithoutCompanyInput = {
    where: game_cardScalarWhereInput;
    data: XOR<game_cardUpdateManyMutationInput, game_cardUncheckedUpdateManyWithoutCompanyInput>;
  };

  export type game_cardScalarWhereInput = {
    AND?: game_cardScalarWhereInput | game_cardScalarWhereInput[];
    OR?: game_cardScalarWhereInput[];
    NOT?: game_cardScalarWhereInput | game_cardScalarWhereInput[];
    id?: UuidFilter<'game_card'> | string;
    name?: StringFilter<'game_card'> | string;
    description?: StringNullableFilter<'game_card'> | string | null;
    user_id?: UuidFilter<'game_card'> | string;
    company_id?: UuidFilter<'game_card'> | string;
    release_date?: DateTimeNullableFilter<'game_card'> | Date | string | null;
    genre?: StringNullableFilter<'game_card'> | string | null;
    rating?: IntNullableFilter<'game_card'> | number | null;
    created_at?: DateTimeFilter<'game_card'> | Date | string;
    updated_at?: DateTimeFilter<'game_card'> | Date | string;
  };

  export type collection_cardCreateWithoutGame_cardInput = {
    id?: string;
    added_at?: Date | string;
    purchase_price?: number | null;
    current_value?: number | null;
    condition?: string | null;
    rating?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    collection: collectionCreateNestedOneWithoutCollection_cardInput;
    user: userCreateNestedOneWithoutCollection_cardInput;
  };

  export type collection_cardUncheckedCreateWithoutGame_cardInput = {
    id?: string;
    collection_id: string;
    added_at?: Date | string;
    user_id: string;
    purchase_price?: number | null;
    current_value?: number | null;
    condition?: string | null;
    rating?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type collection_cardCreateOrConnectWithoutGame_cardInput = {
    where: collection_cardWhereUniqueInput;
    create: XOR<collection_cardCreateWithoutGame_cardInput, collection_cardUncheckedCreateWithoutGame_cardInput>;
  };

  export type collection_cardCreateManyGame_cardInputEnvelope = {
    data: collection_cardCreateManyGame_cardInput | collection_cardCreateManyGame_cardInput[];
    skipDuplicates?: boolean;
  };

  export type companyCreateWithoutGame_cardInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type companyUncheckedCreateWithoutGame_cardInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type companyCreateOrConnectWithoutGame_cardInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutGame_cardInput, companyUncheckedCreateWithoutGame_cardInput>;
  };

  export type userCreateWithoutGame_cardInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    collection?: collectionCreateNestedManyWithoutUserInput;
    collection_card?: collection_cardCreateNestedManyWithoutUserInput;
    transaction?: transactionCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutGame_cardInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    collection?: collectionUncheckedCreateNestedManyWithoutUserInput;
    collection_card?: collection_cardUncheckedCreateNestedManyWithoutUserInput;
    transaction?: transactionUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutGame_cardInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutGame_cardInput, userUncheckedCreateWithoutGame_cardInput>;
  };

  export type transactionCreateWithoutGame_cardInput = {
    id?: string;
    transaction_date?: Date | string;
    transaction_type: string;
    transaction_amount: number;
    payment_method?: string | null;
    billing_address?: string | null;
    shipping_address?: string | null;
    status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutTransactionInput;
  };

  export type transactionUncheckedCreateWithoutGame_cardInput = {
    id?: string;
    user_id: string;
    transaction_date?: Date | string;
    transaction_type: string;
    transaction_amount: number;
    payment_method?: string | null;
    billing_address?: string | null;
    shipping_address?: string | null;
    status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type transactionCreateOrConnectWithoutGame_cardInput = {
    where: transactionWhereUniqueInput;
    create: XOR<transactionCreateWithoutGame_cardInput, transactionUncheckedCreateWithoutGame_cardInput>;
  };

  export type transactionCreateManyGame_cardInputEnvelope = {
    data: transactionCreateManyGame_cardInput | transactionCreateManyGame_cardInput[];
    skipDuplicates?: boolean;
  };

  export type collection_cardUpsertWithWhereUniqueWithoutGame_cardInput = {
    where: collection_cardWhereUniqueInput;
    update: XOR<collection_cardUpdateWithoutGame_cardInput, collection_cardUncheckedUpdateWithoutGame_cardInput>;
    create: XOR<collection_cardCreateWithoutGame_cardInput, collection_cardUncheckedCreateWithoutGame_cardInput>;
  };

  export type collection_cardUpdateWithWhereUniqueWithoutGame_cardInput = {
    where: collection_cardWhereUniqueInput;
    data: XOR<collection_cardUpdateWithoutGame_cardInput, collection_cardUncheckedUpdateWithoutGame_cardInput>;
  };

  export type collection_cardUpdateManyWithWhereWithoutGame_cardInput = {
    where: collection_cardScalarWhereInput;
    data: XOR<collection_cardUpdateManyMutationInput, collection_cardUncheckedUpdateManyWithoutGame_cardInput>;
  };

  export type companyUpsertWithoutGame_cardInput = {
    update: XOR<companyUpdateWithoutGame_cardInput, companyUncheckedUpdateWithoutGame_cardInput>;
    create: XOR<companyCreateWithoutGame_cardInput, companyUncheckedCreateWithoutGame_cardInput>;
    where?: companyWhereInput;
  };

  export type companyUpdateToOneWithWhereWithoutGame_cardInput = {
    where?: companyWhereInput;
    data: XOR<companyUpdateWithoutGame_cardInput, companyUncheckedUpdateWithoutGame_cardInput>;
  };

  export type companyUpdateWithoutGame_cardInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyUncheckedUpdateWithoutGame_cardInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type userUpsertWithoutGame_cardInput = {
    update: XOR<userUpdateWithoutGame_cardInput, userUncheckedUpdateWithoutGame_cardInput>;
    create: XOR<userCreateWithoutGame_cardInput, userUncheckedCreateWithoutGame_cardInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutGame_cardInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutGame_cardInput, userUncheckedUpdateWithoutGame_cardInput>;
  };

  export type userUpdateWithoutGame_cardInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    collection?: collectionUpdateManyWithoutUserNestedInput;
    collection_card?: collection_cardUpdateManyWithoutUserNestedInput;
    transaction?: transactionUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutGame_cardInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    collection?: collectionUncheckedUpdateManyWithoutUserNestedInput;
    collection_card?: collection_cardUncheckedUpdateManyWithoutUserNestedInput;
    transaction?: transactionUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type transactionUpsertWithWhereUniqueWithoutGame_cardInput = {
    where: transactionWhereUniqueInput;
    update: XOR<transactionUpdateWithoutGame_cardInput, transactionUncheckedUpdateWithoutGame_cardInput>;
    create: XOR<transactionCreateWithoutGame_cardInput, transactionUncheckedCreateWithoutGame_cardInput>;
  };

  export type transactionUpdateWithWhereUniqueWithoutGame_cardInput = {
    where: transactionWhereUniqueInput;
    data: XOR<transactionUpdateWithoutGame_cardInput, transactionUncheckedUpdateWithoutGame_cardInput>;
  };

  export type transactionUpdateManyWithWhereWithoutGame_cardInput = {
    where: transactionScalarWhereInput;
    data: XOR<transactionUpdateManyMutationInput, transactionUncheckedUpdateManyWithoutGame_cardInput>;
  };

  export type transactionScalarWhereInput = {
    AND?: transactionScalarWhereInput | transactionScalarWhereInput[];
    OR?: transactionScalarWhereInput[];
    NOT?: transactionScalarWhereInput | transactionScalarWhereInput[];
    id?: UuidFilter<'transaction'> | string;
    user_id?: UuidFilter<'transaction'> | string;
    game_card_id?: UuidFilter<'transaction'> | string;
    transaction_date?: DateTimeFilter<'transaction'> | Date | string;
    transaction_type?: StringFilter<'transaction'> | string;
    transaction_amount?: IntFilter<'transaction'> | number;
    payment_method?: StringNullableFilter<'transaction'> | string | null;
    billing_address?: StringNullableFilter<'transaction'> | string | null;
    shipping_address?: StringNullableFilter<'transaction'> | string | null;
    status?: StringNullableFilter<'transaction'> | string | null;
    created_at?: DateTimeFilter<'transaction'> | Date | string;
    updated_at?: DateTimeFilter<'transaction'> | Date | string;
  };

  export type game_cardCreateWithoutTransactionInput = {
    id?: string;
    name: string;
    description?: string | null;
    release_date?: Date | string | null;
    genre?: string | null;
    rating?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    collection_card?: collection_cardCreateNestedManyWithoutGame_cardInput;
    company: companyCreateNestedOneWithoutGame_cardInput;
    user: userCreateNestedOneWithoutGame_cardInput;
  };

  export type game_cardUncheckedCreateWithoutTransactionInput = {
    id?: string;
    name: string;
    description?: string | null;
    user_id: string;
    company_id: string;
    release_date?: Date | string | null;
    genre?: string | null;
    rating?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    collection_card?: collection_cardUncheckedCreateNestedManyWithoutGame_cardInput;
  };

  export type game_cardCreateOrConnectWithoutTransactionInput = {
    where: game_cardWhereUniqueInput;
    create: XOR<game_cardCreateWithoutTransactionInput, game_cardUncheckedCreateWithoutTransactionInput>;
  };

  export type userCreateWithoutTransactionInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    collection?: collectionCreateNestedManyWithoutUserInput;
    collection_card?: collection_cardCreateNestedManyWithoutUserInput;
    game_card?: game_cardCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutTransactionInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    collection?: collectionUncheckedCreateNestedManyWithoutUserInput;
    collection_card?: collection_cardUncheckedCreateNestedManyWithoutUserInput;
    game_card?: game_cardUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutTransactionInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutTransactionInput, userUncheckedCreateWithoutTransactionInput>;
  };

  export type game_cardUpsertWithoutTransactionInput = {
    update: XOR<game_cardUpdateWithoutTransactionInput, game_cardUncheckedUpdateWithoutTransactionInput>;
    create: XOR<game_cardCreateWithoutTransactionInput, game_cardUncheckedCreateWithoutTransactionInput>;
    where?: game_cardWhereInput;
  };

  export type game_cardUpdateToOneWithWhereWithoutTransactionInput = {
    where?: game_cardWhereInput;
    data: XOR<game_cardUpdateWithoutTransactionInput, game_cardUncheckedUpdateWithoutTransactionInput>;
  };

  export type game_cardUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    genre?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    collection_card?: collection_cardUpdateManyWithoutGame_cardNestedInput;
    company?: companyUpdateOneRequiredWithoutGame_cardNestedInput;
    user?: userUpdateOneRequiredWithoutGame_cardNestedInput;
  };

  export type game_cardUncheckedUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    genre?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    collection_card?: collection_cardUncheckedUpdateManyWithoutGame_cardNestedInput;
  };

  export type userUpsertWithoutTransactionInput = {
    update: XOR<userUpdateWithoutTransactionInput, userUncheckedUpdateWithoutTransactionInput>;
    create: XOR<userCreateWithoutTransactionInput, userUncheckedCreateWithoutTransactionInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutTransactionInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutTransactionInput, userUncheckedUpdateWithoutTransactionInput>;
  };

  export type userUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    collection?: collectionUpdateManyWithoutUserNestedInput;
    collection_card?: collection_cardUpdateManyWithoutUserNestedInput;
    game_card?: game_cardUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    collection?: collectionUncheckedUpdateManyWithoutUserNestedInput;
    collection_card?: collection_cardUncheckedUpdateManyWithoutUserNestedInput;
    game_card?: game_cardUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type collectionCreateWithoutUserInput = {
    id?: string;
    name: string;
    description?: string | null;
    total_cards?: number | null;
    total_value?: number | null;
    average_rating?: number | null;
    last_updated_card?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    collection_card?: collection_cardCreateNestedManyWithoutCollectionInput;
  };

  export type collectionUncheckedCreateWithoutUserInput = {
    id?: string;
    name: string;
    description?: string | null;
    total_cards?: number | null;
    total_value?: number | null;
    average_rating?: number | null;
    last_updated_card?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    collection_card?: collection_cardUncheckedCreateNestedManyWithoutCollectionInput;
  };

  export type collectionCreateOrConnectWithoutUserInput = {
    where: collectionWhereUniqueInput;
    create: XOR<collectionCreateWithoutUserInput, collectionUncheckedCreateWithoutUserInput>;
  };

  export type collectionCreateManyUserInputEnvelope = {
    data: collectionCreateManyUserInput | collectionCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type collection_cardCreateWithoutUserInput = {
    id?: string;
    added_at?: Date | string;
    purchase_price?: number | null;
    current_value?: number | null;
    condition?: string | null;
    rating?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    collection: collectionCreateNestedOneWithoutCollection_cardInput;
    game_card: game_cardCreateNestedOneWithoutCollection_cardInput;
  };

  export type collection_cardUncheckedCreateWithoutUserInput = {
    id?: string;
    collection_id: string;
    game_card_id: string;
    added_at?: Date | string;
    purchase_price?: number | null;
    current_value?: number | null;
    condition?: string | null;
    rating?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type collection_cardCreateOrConnectWithoutUserInput = {
    where: collection_cardWhereUniqueInput;
    create: XOR<collection_cardCreateWithoutUserInput, collection_cardUncheckedCreateWithoutUserInput>;
  };

  export type collection_cardCreateManyUserInputEnvelope = {
    data: collection_cardCreateManyUserInput | collection_cardCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type game_cardCreateWithoutUserInput = {
    id?: string;
    name: string;
    description?: string | null;
    release_date?: Date | string | null;
    genre?: string | null;
    rating?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    collection_card?: collection_cardCreateNestedManyWithoutGame_cardInput;
    company: companyCreateNestedOneWithoutGame_cardInput;
    transaction?: transactionCreateNestedManyWithoutGame_cardInput;
  };

  export type game_cardUncheckedCreateWithoutUserInput = {
    id?: string;
    name: string;
    description?: string | null;
    company_id: string;
    release_date?: Date | string | null;
    genre?: string | null;
    rating?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    collection_card?: collection_cardUncheckedCreateNestedManyWithoutGame_cardInput;
    transaction?: transactionUncheckedCreateNestedManyWithoutGame_cardInput;
  };

  export type game_cardCreateOrConnectWithoutUserInput = {
    where: game_cardWhereUniqueInput;
    create: XOR<game_cardCreateWithoutUserInput, game_cardUncheckedCreateWithoutUserInput>;
  };

  export type game_cardCreateManyUserInputEnvelope = {
    data: game_cardCreateManyUserInput | game_cardCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type transactionCreateWithoutUserInput = {
    id?: string;
    transaction_date?: Date | string;
    transaction_type: string;
    transaction_amount: number;
    payment_method?: string | null;
    billing_address?: string | null;
    shipping_address?: string | null;
    status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    game_card: game_cardCreateNestedOneWithoutTransactionInput;
  };

  export type transactionUncheckedCreateWithoutUserInput = {
    id?: string;
    game_card_id: string;
    transaction_date?: Date | string;
    transaction_type: string;
    transaction_amount: number;
    payment_method?: string | null;
    billing_address?: string | null;
    shipping_address?: string | null;
    status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type transactionCreateOrConnectWithoutUserInput = {
    where: transactionWhereUniqueInput;
    create: XOR<transactionCreateWithoutUserInput, transactionUncheckedCreateWithoutUserInput>;
  };

  export type transactionCreateManyUserInputEnvelope = {
    data: transactionCreateManyUserInput | transactionCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type collectionUpsertWithWhereUniqueWithoutUserInput = {
    where: collectionWhereUniqueInput;
    update: XOR<collectionUpdateWithoutUserInput, collectionUncheckedUpdateWithoutUserInput>;
    create: XOR<collectionCreateWithoutUserInput, collectionUncheckedCreateWithoutUserInput>;
  };

  export type collectionUpdateWithWhereUniqueWithoutUserInput = {
    where: collectionWhereUniqueInput;
    data: XOR<collectionUpdateWithoutUserInput, collectionUncheckedUpdateWithoutUserInput>;
  };

  export type collectionUpdateManyWithWhereWithoutUserInput = {
    where: collectionScalarWhereInput;
    data: XOR<collectionUpdateManyMutationInput, collectionUncheckedUpdateManyWithoutUserInput>;
  };

  export type collectionScalarWhereInput = {
    AND?: collectionScalarWhereInput | collectionScalarWhereInput[];
    OR?: collectionScalarWhereInput[];
    NOT?: collectionScalarWhereInput | collectionScalarWhereInput[];
    id?: UuidFilter<'collection'> | string;
    name?: StringFilter<'collection'> | string;
    description?: StringNullableFilter<'collection'> | string | null;
    user_id?: UuidFilter<'collection'> | string;
    total_cards?: IntNullableFilter<'collection'> | number | null;
    total_value?: IntNullableFilter<'collection'> | number | null;
    average_rating?: IntNullableFilter<'collection'> | number | null;
    last_updated_card?: DateTimeNullableFilter<'collection'> | Date | string | null;
    created_at?: DateTimeFilter<'collection'> | Date | string;
    updated_at?: DateTimeFilter<'collection'> | Date | string;
  };

  export type collection_cardUpsertWithWhereUniqueWithoutUserInput = {
    where: collection_cardWhereUniqueInput;
    update: XOR<collection_cardUpdateWithoutUserInput, collection_cardUncheckedUpdateWithoutUserInput>;
    create: XOR<collection_cardCreateWithoutUserInput, collection_cardUncheckedCreateWithoutUserInput>;
  };

  export type collection_cardUpdateWithWhereUniqueWithoutUserInput = {
    where: collection_cardWhereUniqueInput;
    data: XOR<collection_cardUpdateWithoutUserInput, collection_cardUncheckedUpdateWithoutUserInput>;
  };

  export type collection_cardUpdateManyWithWhereWithoutUserInput = {
    where: collection_cardScalarWhereInput;
    data: XOR<collection_cardUpdateManyMutationInput, collection_cardUncheckedUpdateManyWithoutUserInput>;
  };

  export type game_cardUpsertWithWhereUniqueWithoutUserInput = {
    where: game_cardWhereUniqueInput;
    update: XOR<game_cardUpdateWithoutUserInput, game_cardUncheckedUpdateWithoutUserInput>;
    create: XOR<game_cardCreateWithoutUserInput, game_cardUncheckedCreateWithoutUserInput>;
  };

  export type game_cardUpdateWithWhereUniqueWithoutUserInput = {
    where: game_cardWhereUniqueInput;
    data: XOR<game_cardUpdateWithoutUserInput, game_cardUncheckedUpdateWithoutUserInput>;
  };

  export type game_cardUpdateManyWithWhereWithoutUserInput = {
    where: game_cardScalarWhereInput;
    data: XOR<game_cardUpdateManyMutationInput, game_cardUncheckedUpdateManyWithoutUserInput>;
  };

  export type transactionUpsertWithWhereUniqueWithoutUserInput = {
    where: transactionWhereUniqueInput;
    update: XOR<transactionUpdateWithoutUserInput, transactionUncheckedUpdateWithoutUserInput>;
    create: XOR<transactionCreateWithoutUserInput, transactionUncheckedCreateWithoutUserInput>;
  };

  export type transactionUpdateWithWhereUniqueWithoutUserInput = {
    where: transactionWhereUniqueInput;
    data: XOR<transactionUpdateWithoutUserInput, transactionUncheckedUpdateWithoutUserInput>;
  };

  export type transactionUpdateManyWithWhereWithoutUserInput = {
    where: transactionScalarWhereInput;
    data: XOR<transactionUpdateManyMutationInput, transactionUncheckedUpdateManyWithoutUserInput>;
  };

  export type collection_cardCreateManyCollectionInput = {
    id?: string;
    game_card_id: string;
    added_at?: Date | string;
    user_id: string;
    purchase_price?: number | null;
    current_value?: number | null;
    condition?: string | null;
    rating?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type collection_cardUpdateWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    added_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    purchase_price?: NullableIntFieldUpdateOperationsInput | number | null;
    current_value?: NullableIntFieldUpdateOperationsInput | number | null;
    condition?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    game_card?: game_cardUpdateOneRequiredWithoutCollection_cardNestedInput;
    user?: userUpdateOneRequiredWithoutCollection_cardNestedInput;
  };

  export type collection_cardUncheckedUpdateWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    game_card_id?: StringFieldUpdateOperationsInput | string;
    added_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    purchase_price?: NullableIntFieldUpdateOperationsInput | number | null;
    current_value?: NullableIntFieldUpdateOperationsInput | number | null;
    condition?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type collection_cardUncheckedUpdateManyWithoutCollectionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    game_card_id?: StringFieldUpdateOperationsInput | string;
    added_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    purchase_price?: NullableIntFieldUpdateOperationsInput | number | null;
    current_value?: NullableIntFieldUpdateOperationsInput | number | null;
    condition?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type game_cardCreateManyCompanyInput = {
    id?: string;
    name: string;
    description?: string | null;
    user_id: string;
    release_date?: Date | string | null;
    genre?: string | null;
    rating?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type game_cardUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    genre?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    collection_card?: collection_cardUpdateManyWithoutGame_cardNestedInput;
    user?: userUpdateOneRequiredWithoutGame_cardNestedInput;
    transaction?: transactionUpdateManyWithoutGame_cardNestedInput;
  };

  export type game_cardUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    genre?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    collection_card?: collection_cardUncheckedUpdateManyWithoutGame_cardNestedInput;
    transaction?: transactionUncheckedUpdateManyWithoutGame_cardNestedInput;
  };

  export type game_cardUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    genre?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type collection_cardCreateManyGame_cardInput = {
    id?: string;
    collection_id: string;
    added_at?: Date | string;
    user_id: string;
    purchase_price?: number | null;
    current_value?: number | null;
    condition?: string | null;
    rating?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type transactionCreateManyGame_cardInput = {
    id?: string;
    user_id: string;
    transaction_date?: Date | string;
    transaction_type: string;
    transaction_amount: number;
    payment_method?: string | null;
    billing_address?: string | null;
    shipping_address?: string | null;
    status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type collection_cardUpdateWithoutGame_cardInput = {
    id?: StringFieldUpdateOperationsInput | string;
    added_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    purchase_price?: NullableIntFieldUpdateOperationsInput | number | null;
    current_value?: NullableIntFieldUpdateOperationsInput | number | null;
    condition?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    collection?: collectionUpdateOneRequiredWithoutCollection_cardNestedInput;
    user?: userUpdateOneRequiredWithoutCollection_cardNestedInput;
  };

  export type collection_cardUncheckedUpdateWithoutGame_cardInput = {
    id?: StringFieldUpdateOperationsInput | string;
    collection_id?: StringFieldUpdateOperationsInput | string;
    added_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    purchase_price?: NullableIntFieldUpdateOperationsInput | number | null;
    current_value?: NullableIntFieldUpdateOperationsInput | number | null;
    condition?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type collection_cardUncheckedUpdateManyWithoutGame_cardInput = {
    id?: StringFieldUpdateOperationsInput | string;
    collection_id?: StringFieldUpdateOperationsInput | string;
    added_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    purchase_price?: NullableIntFieldUpdateOperationsInput | number | null;
    current_value?: NullableIntFieldUpdateOperationsInput | number | null;
    condition?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type transactionUpdateWithoutGame_cardInput = {
    id?: StringFieldUpdateOperationsInput | string;
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    transaction_type?: StringFieldUpdateOperationsInput | string;
    transaction_amount?: IntFieldUpdateOperationsInput | number;
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null;
    billing_address?: NullableStringFieldUpdateOperationsInput | string | null;
    shipping_address?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutTransactionNestedInput;
  };

  export type transactionUncheckedUpdateWithoutGame_cardInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    transaction_type?: StringFieldUpdateOperationsInput | string;
    transaction_amount?: IntFieldUpdateOperationsInput | number;
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null;
    billing_address?: NullableStringFieldUpdateOperationsInput | string | null;
    shipping_address?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type transactionUncheckedUpdateManyWithoutGame_cardInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    transaction_type?: StringFieldUpdateOperationsInput | string;
    transaction_amount?: IntFieldUpdateOperationsInput | number;
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null;
    billing_address?: NullableStringFieldUpdateOperationsInput | string | null;
    shipping_address?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type collectionCreateManyUserInput = {
    id?: string;
    name: string;
    description?: string | null;
    total_cards?: number | null;
    total_value?: number | null;
    average_rating?: number | null;
    last_updated_card?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type collection_cardCreateManyUserInput = {
    id?: string;
    collection_id: string;
    game_card_id: string;
    added_at?: Date | string;
    purchase_price?: number | null;
    current_value?: number | null;
    condition?: string | null;
    rating?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type game_cardCreateManyUserInput = {
    id?: string;
    name: string;
    description?: string | null;
    company_id: string;
    release_date?: Date | string | null;
    genre?: string | null;
    rating?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type transactionCreateManyUserInput = {
    id?: string;
    game_card_id: string;
    transaction_date?: Date | string;
    transaction_type: string;
    transaction_amount: number;
    payment_method?: string | null;
    billing_address?: string | null;
    shipping_address?: string | null;
    status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type collectionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    total_cards?: NullableIntFieldUpdateOperationsInput | number | null;
    total_value?: NullableIntFieldUpdateOperationsInput | number | null;
    average_rating?: NullableIntFieldUpdateOperationsInput | number | null;
    last_updated_card?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    collection_card?: collection_cardUpdateManyWithoutCollectionNestedInput;
  };

  export type collectionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    total_cards?: NullableIntFieldUpdateOperationsInput | number | null;
    total_value?: NullableIntFieldUpdateOperationsInput | number | null;
    average_rating?: NullableIntFieldUpdateOperationsInput | number | null;
    last_updated_card?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    collection_card?: collection_cardUncheckedUpdateManyWithoutCollectionNestedInput;
  };

  export type collectionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    total_cards?: NullableIntFieldUpdateOperationsInput | number | null;
    total_value?: NullableIntFieldUpdateOperationsInput | number | null;
    average_rating?: NullableIntFieldUpdateOperationsInput | number | null;
    last_updated_card?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type collection_cardUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    added_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    purchase_price?: NullableIntFieldUpdateOperationsInput | number | null;
    current_value?: NullableIntFieldUpdateOperationsInput | number | null;
    condition?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    collection?: collectionUpdateOneRequiredWithoutCollection_cardNestedInput;
    game_card?: game_cardUpdateOneRequiredWithoutCollection_cardNestedInput;
  };

  export type collection_cardUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    collection_id?: StringFieldUpdateOperationsInput | string;
    game_card_id?: StringFieldUpdateOperationsInput | string;
    added_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    purchase_price?: NullableIntFieldUpdateOperationsInput | number | null;
    current_value?: NullableIntFieldUpdateOperationsInput | number | null;
    condition?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type collection_cardUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    collection_id?: StringFieldUpdateOperationsInput | string;
    game_card_id?: StringFieldUpdateOperationsInput | string;
    added_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    purchase_price?: NullableIntFieldUpdateOperationsInput | number | null;
    current_value?: NullableIntFieldUpdateOperationsInput | number | null;
    condition?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type game_cardUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    genre?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    collection_card?: collection_cardUpdateManyWithoutGame_cardNestedInput;
    company?: companyUpdateOneRequiredWithoutGame_cardNestedInput;
    transaction?: transactionUpdateManyWithoutGame_cardNestedInput;
  };

  export type game_cardUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    company_id?: StringFieldUpdateOperationsInput | string;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    genre?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    collection_card?: collection_cardUncheckedUpdateManyWithoutGame_cardNestedInput;
    transaction?: transactionUncheckedUpdateManyWithoutGame_cardNestedInput;
  };

  export type game_cardUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    company_id?: StringFieldUpdateOperationsInput | string;
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    genre?: NullableStringFieldUpdateOperationsInput | string | null;
    rating?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type transactionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    transaction_type?: StringFieldUpdateOperationsInput | string;
    transaction_amount?: IntFieldUpdateOperationsInput | number;
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null;
    billing_address?: NullableStringFieldUpdateOperationsInput | string | null;
    shipping_address?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    game_card?: game_cardUpdateOneRequiredWithoutTransactionNestedInput;
  };

  export type transactionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    game_card_id?: StringFieldUpdateOperationsInput | string;
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    transaction_type?: StringFieldUpdateOperationsInput | string;
    transaction_amount?: IntFieldUpdateOperationsInput | number;
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null;
    billing_address?: NullableStringFieldUpdateOperationsInput | string | null;
    shipping_address?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type transactionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    game_card_id?: StringFieldUpdateOperationsInput | string;
    transaction_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    transaction_type?: StringFieldUpdateOperationsInput | string;
    transaction_amount?: IntFieldUpdateOperationsInput | number;
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null;
    billing_address?: NullableStringFieldUpdateOperationsInput | string | null;
    shipping_address?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use CollectionCountOutputTypeDefaultArgs instead
   */
  export type CollectionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    CollectionCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use CompanyCountOutputTypeDefaultArgs instead
   */
  export type CompanyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    CompanyCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use Game_cardCountOutputTypeDefaultArgs instead
   */
  export type Game_cardCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Game_cardCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use collectionDefaultArgs instead
   */
  export type collectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    collectionDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use collection_cardDefaultArgs instead
   */
  export type collection_cardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    collection_cardDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use companyDefaultArgs instead
   */
  export type companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    companyDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use game_cardDefaultArgs instead
   */
  export type game_cardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    game_cardDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use transactionDefaultArgs instead
   */
  export type transactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    transactionDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
