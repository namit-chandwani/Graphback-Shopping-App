/* eslint-disable */
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  GraphbackDate: Date;
  GraphbackObjectID: string;
};

/** @model */
export type Cart = {
  __typename?: 'Cart';
  _id: Scalars['GraphbackObjectID'];
  name: Scalars['String'];
  /**
   * @oneToMany(field: 'cart', key: 'cartId')
   * @oneToMany(field: 'cart')
   */
  cartItems: Array<CartItem>;
};


/** @model */
export type CartCartItemsArgs = {
  filter?: Maybe<CartItemFilter>;
};

export type CartFilter = {
  _id?: Maybe<GraphbackObjectIdInput>;
  name?: Maybe<StringInput>;
  and?: Maybe<Array<CartFilter>>;
  or?: Maybe<Array<CartFilter>>;
  not?: Maybe<CartFilter>;
};

/** @model */
export type CartItem = {
  __typename?: 'CartItem';
  _id: Scalars['GraphbackObjectID'];
  quantity: Scalars['Int'];
  /**
   * @oneToOne(key: 'productId')
   * @oneToOne(field: 'cartItem')
   */
  product: Product;
  /** @manyToOne(field: 'cartItems', key: 'cartId') */
  cart?: Maybe<Cart>;
};

export type CartItemFilter = {
  _id?: Maybe<GraphbackObjectIdInput>;
  quantity?: Maybe<IntInput>;
  productId?: Maybe<GraphbackObjectIdInput>;
  cartId?: Maybe<GraphbackObjectIdInput>;
  and?: Maybe<Array<CartItemFilter>>;
  or?: Maybe<Array<CartItemFilter>>;
  not?: Maybe<CartItemFilter>;
};

export type CartItemResultList = {
  __typename?: 'CartItemResultList';
  items: Array<Maybe<CartItem>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
};

export type CartItemSubscriptionFilter = {
  and?: Maybe<Array<CartItemSubscriptionFilter>>;
  or?: Maybe<Array<CartItemSubscriptionFilter>>;
  not?: Maybe<CartItemSubscriptionFilter>;
  _id?: Maybe<GraphbackObjectIdInput>;
  quantity?: Maybe<IntInput>;
};

export type CartResultList = {
  __typename?: 'CartResultList';
  items: Array<Maybe<Cart>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
};

export type CartSubscriptionFilter = {
  and?: Maybe<Array<CartSubscriptionFilter>>;
  or?: Maybe<Array<CartSubscriptionFilter>>;
  not?: Maybe<CartSubscriptionFilter>;
  _id?: Maybe<GraphbackObjectIdInput>;
  name?: Maybe<StringInput>;
};

export type CreateCartInput = {
  name: Scalars['String'];
};

export type CreateCartItemInput = {
  quantity: Scalars['Int'];
  productId: Scalars['GraphbackObjectID'];
  cartId?: Maybe<Scalars['GraphbackObjectID']>;
};

export type CreateOrderInput = {
  datePlaced: Scalars['GraphbackDate'];
  cartId: Scalars['GraphbackObjectID'];
};

export type CreateProductInput = {
  name: Scalars['String'];
  price: Scalars['Float'];
  description?: Maybe<Scalars['String']>;
};

export type FloatInput = {
  ne?: Maybe<Scalars['Float']>;
  eq?: Maybe<Scalars['Float']>;
  le?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  ge?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  between?: Maybe<Array<Scalars['Float']>>;
};


export type GraphbackDateInput = {
  ne?: Maybe<Scalars['GraphbackDate']>;
  eq?: Maybe<Scalars['GraphbackDate']>;
  le?: Maybe<Scalars['GraphbackDate']>;
  lt?: Maybe<Scalars['GraphbackDate']>;
  ge?: Maybe<Scalars['GraphbackDate']>;
  gt?: Maybe<Scalars['GraphbackDate']>;
  in?: Maybe<Array<Scalars['GraphbackDate']>>;
  between?: Maybe<Array<Scalars['GraphbackDate']>>;
};


export type GraphbackObjectIdInput = {
  ne?: Maybe<Scalars['GraphbackObjectID']>;
  eq?: Maybe<Scalars['GraphbackObjectID']>;
  le?: Maybe<Scalars['GraphbackObjectID']>;
  lt?: Maybe<Scalars['GraphbackObjectID']>;
  ge?: Maybe<Scalars['GraphbackObjectID']>;
  gt?: Maybe<Scalars['GraphbackObjectID']>;
  in?: Maybe<Array<Scalars['GraphbackObjectID']>>;
  between?: Maybe<Array<Scalars['GraphbackObjectID']>>;
};

export type IntInput = {
  ne?: Maybe<Scalars['Int']>;
  eq?: Maybe<Scalars['Int']>;
  le?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  ge?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  between?: Maybe<Array<Scalars['Int']>>;
};

export type MutateCartInput = {
  _id: Scalars['GraphbackObjectID'];
  name?: Maybe<Scalars['String']>;
};

export type MutateCartItemInput = {
  _id: Scalars['GraphbackObjectID'];
  quantity?: Maybe<Scalars['Int']>;
  productId?: Maybe<Scalars['GraphbackObjectID']>;
  cartId?: Maybe<Scalars['GraphbackObjectID']>;
};

export type MutateOrderInput = {
  _id: Scalars['GraphbackObjectID'];
  datePlaced?: Maybe<Scalars['GraphbackDate']>;
  cartId?: Maybe<Scalars['GraphbackObjectID']>;
};

export type MutateProductInput = {
  _id: Scalars['GraphbackObjectID'];
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createProduct?: Maybe<Product>;
  updateProduct?: Maybe<Product>;
  deleteProduct?: Maybe<Product>;
  createCart?: Maybe<Cart>;
  updateCart?: Maybe<Cart>;
  deleteCart?: Maybe<Cart>;
  createOrder?: Maybe<Order>;
  updateOrder?: Maybe<Order>;
  deleteOrder?: Maybe<Order>;
  createCartItem?: Maybe<CartItem>;
  updateCartItem?: Maybe<CartItem>;
  deleteCartItem?: Maybe<CartItem>;
};


export type MutationCreateProductArgs = {
  input: CreateProductInput;
};


export type MutationUpdateProductArgs = {
  input: MutateProductInput;
};


export type MutationDeleteProductArgs = {
  input: MutateProductInput;
};


export type MutationCreateCartArgs = {
  input: CreateCartInput;
};


export type MutationUpdateCartArgs = {
  input: MutateCartInput;
};


export type MutationDeleteCartArgs = {
  input: MutateCartInput;
};


export type MutationCreateOrderArgs = {
  input: CreateOrderInput;
};


export type MutationUpdateOrderArgs = {
  input: MutateOrderInput;
};


export type MutationDeleteOrderArgs = {
  input: MutateOrderInput;
};


export type MutationCreateCartItemArgs = {
  input: CreateCartItemInput;
};


export type MutationUpdateCartItemArgs = {
  input: MutateCartItemInput;
};


export type MutationDeleteCartItemArgs = {
  input: MutateCartItemInput;
};

/** @model */
export type Order = {
  __typename?: 'Order';
  _id: Scalars['GraphbackObjectID'];
  datePlaced: Scalars['GraphbackDate'];
  /**
   * @oneToOne(key: 'cartId')
   * @oneToOne(field: 'order')
   */
  cart: Cart;
};

export type OrderByInput = {
  field: Scalars['String'];
  order?: Maybe<SortDirectionEnum>;
};

export type OrderFilter = {
  _id?: Maybe<GraphbackObjectIdInput>;
  datePlaced?: Maybe<GraphbackDateInput>;
  cartId?: Maybe<GraphbackObjectIdInput>;
  and?: Maybe<Array<OrderFilter>>;
  or?: Maybe<Array<OrderFilter>>;
  not?: Maybe<OrderFilter>;
};

export type OrderResultList = {
  __typename?: 'OrderResultList';
  items: Array<Maybe<Order>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
};

export type OrderSubscriptionFilter = {
  and?: Maybe<Array<OrderSubscriptionFilter>>;
  or?: Maybe<Array<OrderSubscriptionFilter>>;
  not?: Maybe<OrderSubscriptionFilter>;
  _id?: Maybe<GraphbackObjectIdInput>;
  datePlaced?: Maybe<GraphbackDateInput>;
};

export type PageRequest = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

/** @model */
export type Product = {
  __typename?: 'Product';
  _id: Scalars['GraphbackObjectID'];
  name: Scalars['String'];
  price: Scalars['Float'];
  description?: Maybe<Scalars['String']>;
};

export type ProductFilter = {
  _id?: Maybe<GraphbackObjectIdInput>;
  name?: Maybe<StringInput>;
  price?: Maybe<FloatInput>;
  description?: Maybe<StringInput>;
  and?: Maybe<Array<ProductFilter>>;
  or?: Maybe<Array<ProductFilter>>;
  not?: Maybe<ProductFilter>;
};

export type ProductResultList = {
  __typename?: 'ProductResultList';
  items: Array<Maybe<Product>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
};

export type ProductSubscriptionFilter = {
  and?: Maybe<Array<ProductSubscriptionFilter>>;
  or?: Maybe<Array<ProductSubscriptionFilter>>;
  not?: Maybe<ProductSubscriptionFilter>;
  _id?: Maybe<GraphbackObjectIdInput>;
  name?: Maybe<StringInput>;
  price?: Maybe<FloatInput>;
  description?: Maybe<StringInput>;
};

export type Query = {
  __typename?: 'Query';
  getProduct?: Maybe<Product>;
  findProducts: ProductResultList;
  getCart?: Maybe<Cart>;
  findCarts: CartResultList;
  getOrder?: Maybe<Order>;
  findOrders: OrderResultList;
  getCartItem?: Maybe<CartItem>;
  findCartItems: CartItemResultList;
};


export type QueryGetProductArgs = {
  id: Scalars['GraphbackObjectID'];
};


export type QueryFindProductsArgs = {
  filter?: Maybe<ProductFilter>;
  page?: Maybe<PageRequest>;
  orderBy?: Maybe<OrderByInput>;
};


export type QueryGetCartArgs = {
  id: Scalars['GraphbackObjectID'];
};


export type QueryFindCartsArgs = {
  filter?: Maybe<CartFilter>;
  page?: Maybe<PageRequest>;
  orderBy?: Maybe<OrderByInput>;
};


export type QueryGetOrderArgs = {
  id: Scalars['GraphbackObjectID'];
};


export type QueryFindOrdersArgs = {
  filter?: Maybe<OrderFilter>;
  page?: Maybe<PageRequest>;
  orderBy?: Maybe<OrderByInput>;
};


export type QueryGetCartItemArgs = {
  id: Scalars['GraphbackObjectID'];
};


export type QueryFindCartItemsArgs = {
  filter?: Maybe<CartItemFilter>;
  page?: Maybe<PageRequest>;
  orderBy?: Maybe<OrderByInput>;
};

export enum SortDirectionEnum {
  Desc = 'DESC',
  Asc = 'ASC'
}

export type StringInput = {
  ne?: Maybe<Scalars['String']>;
  eq?: Maybe<Scalars['String']>;
  le?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  ge?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  newProduct: Product;
  updatedProduct: Product;
  deletedProduct: Product;
  newCart: Cart;
  updatedCart: Cart;
  deletedCart: Cart;
  newOrder: Order;
  updatedOrder: Order;
  deletedOrder: Order;
  newCartItem: CartItem;
  updatedCartItem: CartItem;
  deletedCartItem: CartItem;
};


export type SubscriptionNewProductArgs = {
  filter?: Maybe<ProductSubscriptionFilter>;
};


export type SubscriptionUpdatedProductArgs = {
  filter?: Maybe<ProductSubscriptionFilter>;
};


export type SubscriptionDeletedProductArgs = {
  filter?: Maybe<ProductSubscriptionFilter>;
};


export type SubscriptionNewCartArgs = {
  filter?: Maybe<CartSubscriptionFilter>;
};


export type SubscriptionUpdatedCartArgs = {
  filter?: Maybe<CartSubscriptionFilter>;
};


export type SubscriptionDeletedCartArgs = {
  filter?: Maybe<CartSubscriptionFilter>;
};


export type SubscriptionNewOrderArgs = {
  filter?: Maybe<OrderSubscriptionFilter>;
};


export type SubscriptionUpdatedOrderArgs = {
  filter?: Maybe<OrderSubscriptionFilter>;
};


export type SubscriptionDeletedOrderArgs = {
  filter?: Maybe<OrderSubscriptionFilter>;
};


export type SubscriptionNewCartItemArgs = {
  filter?: Maybe<CartItemSubscriptionFilter>;
};


export type SubscriptionUpdatedCartItemArgs = {
  filter?: Maybe<CartItemSubscriptionFilter>;
};


export type SubscriptionDeletedCartItemArgs = {
  filter?: Maybe<CartItemSubscriptionFilter>;
};
