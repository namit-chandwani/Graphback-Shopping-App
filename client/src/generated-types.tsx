/* eslint-disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
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

export type ProductFieldsFragment = (
  { __typename?: 'Product' }
  & Pick<Product, '_id' | 'name' | 'price' | 'description'>
);

export type ProductExpandedFieldsFragment = (
  { __typename?: 'Product' }
  & Pick<Product, '_id' | 'name' | 'price' | 'description'>
);

export type CartFieldsFragment = (
  { __typename?: 'Cart' }
  & Pick<Cart, '_id' | 'name'>
);

export type CartExpandedFieldsFragment = (
  { __typename?: 'Cart' }
  & Pick<Cart, '_id' | 'name'>
  & { cartItems: Array<(
    { __typename?: 'CartItem' }
    & Pick<CartItem, '_id' | 'quantity'>
  )> }
);

export type CartItemFieldsFragment = (
  { __typename?: 'CartItem' }
  & Pick<CartItem, '_id' | 'quantity'>
);

export type CartItemExpandedFieldsFragment = (
  { __typename?: 'CartItem' }
  & Pick<CartItem, '_id' | 'quantity'>
  & { product: (
    { __typename?: 'Product' }
    & Pick<Product, '_id' | 'name' | 'price' | 'description'>
  ), cart?: Maybe<(
    { __typename?: 'Cart' }
    & Pick<Cart, '_id' | 'name'>
  )> }
);

export type OrderFieldsFragment = (
  { __typename?: 'Order' }
  & Pick<Order, '_id' | 'datePlaced'>
);

export type OrderExpandedFieldsFragment = (
  { __typename?: 'Order' }
  & Pick<Order, '_id' | 'datePlaced'>
  & { cart: (
    { __typename?: 'Cart' }
    & Pick<Cart, '_id' | 'name'>
  ) }
);

export type FindProductsQueryVariables = Exact<{
  filter?: Maybe<ProductFilter>;
  page?: Maybe<PageRequest>;
  orderBy?: Maybe<OrderByInput>;
}>;


export type FindProductsQuery = (
  { __typename?: 'Query' }
  & { findProducts: (
    { __typename?: 'ProductResultList' }
    & Pick<ProductResultList, 'offset' | 'limit' | 'count'>
    & { items: Array<Maybe<(
      { __typename?: 'Product' }
      & ProductExpandedFieldsFragment
    )>> }
  ) }
);

export type GetProductQueryVariables = Exact<{
  id: Scalars['GraphbackObjectID'];
}>;


export type GetProductQuery = (
  { __typename?: 'Query' }
  & { getProduct?: Maybe<(
    { __typename?: 'Product' }
    & ProductExpandedFieldsFragment
  )> }
);

export type FindCartsQueryVariables = Exact<{
  filter?: Maybe<CartFilter>;
  page?: Maybe<PageRequest>;
  orderBy?: Maybe<OrderByInput>;
}>;


export type FindCartsQuery = (
  { __typename?: 'Query' }
  & { findCarts: (
    { __typename?: 'CartResultList' }
    & Pick<CartResultList, 'offset' | 'limit' | 'count'>
    & { items: Array<Maybe<(
      { __typename?: 'Cart' }
      & CartExpandedFieldsFragment
    )>> }
  ) }
);

export type GetCartQueryVariables = Exact<{
  id: Scalars['GraphbackObjectID'];
}>;


export type GetCartQuery = (
  { __typename?: 'Query' }
  & { getCart?: Maybe<(
    { __typename?: 'Cart' }
    & CartExpandedFieldsFragment
  )> }
);

export type FindCartItemsQueryVariables = Exact<{
  filter?: Maybe<CartItemFilter>;
  page?: Maybe<PageRequest>;
  orderBy?: Maybe<OrderByInput>;
}>;


export type FindCartItemsQuery = (
  { __typename?: 'Query' }
  & { findCartItems: (
    { __typename?: 'CartItemResultList' }
    & Pick<CartItemResultList, 'offset' | 'limit' | 'count'>
    & { items: Array<Maybe<(
      { __typename?: 'CartItem' }
      & CartItemExpandedFieldsFragment
    )>> }
  ) }
);

export type GetCartItemQueryVariables = Exact<{
  id: Scalars['GraphbackObjectID'];
}>;


export type GetCartItemQuery = (
  { __typename?: 'Query' }
  & { getCartItem?: Maybe<(
    { __typename?: 'CartItem' }
    & CartItemExpandedFieldsFragment
  )> }
);

export type FindOrdersQueryVariables = Exact<{
  filter?: Maybe<OrderFilter>;
  page?: Maybe<PageRequest>;
  orderBy?: Maybe<OrderByInput>;
}>;


export type FindOrdersQuery = (
  { __typename?: 'Query' }
  & { findOrders: (
    { __typename?: 'OrderResultList' }
    & Pick<OrderResultList, 'offset' | 'limit' | 'count'>
    & { items: Array<Maybe<(
      { __typename?: 'Order' }
      & OrderExpandedFieldsFragment
    )>> }
  ) }
);

export type GetOrderQueryVariables = Exact<{
  id: Scalars['GraphbackObjectID'];
}>;


export type GetOrderQuery = (
  { __typename?: 'Query' }
  & { getOrder?: Maybe<(
    { __typename?: 'Order' }
    & OrderExpandedFieldsFragment
  )> }
);

export type CreateProductMutationVariables = Exact<{
  input: CreateProductInput;
}>;


export type CreateProductMutation = (
  { __typename?: 'Mutation' }
  & { createProduct?: Maybe<(
    { __typename?: 'Product' }
    & ProductFieldsFragment
  )> }
);

export type UpdateProductMutationVariables = Exact<{
  input: MutateProductInput;
}>;


export type UpdateProductMutation = (
  { __typename?: 'Mutation' }
  & { updateProduct?: Maybe<(
    { __typename?: 'Product' }
    & ProductFieldsFragment
  )> }
);

export type DeleteProductMutationVariables = Exact<{
  input: MutateProductInput;
}>;


export type DeleteProductMutation = (
  { __typename?: 'Mutation' }
  & { deleteProduct?: Maybe<(
    { __typename?: 'Product' }
    & ProductFieldsFragment
  )> }
);

export type CreateCartMutationVariables = Exact<{
  input: CreateCartInput;
}>;


export type CreateCartMutation = (
  { __typename?: 'Mutation' }
  & { createCart?: Maybe<(
    { __typename?: 'Cart' }
    & CartFieldsFragment
  )> }
);

export type UpdateCartMutationVariables = Exact<{
  input: MutateCartInput;
}>;


export type UpdateCartMutation = (
  { __typename?: 'Mutation' }
  & { updateCart?: Maybe<(
    { __typename?: 'Cart' }
    & CartFieldsFragment
  )> }
);

export type DeleteCartMutationVariables = Exact<{
  input: MutateCartInput;
}>;


export type DeleteCartMutation = (
  { __typename?: 'Mutation' }
  & { deleteCart?: Maybe<(
    { __typename?: 'Cart' }
    & CartFieldsFragment
  )> }
);

export type CreateCartItemMutationVariables = Exact<{
  input: CreateCartItemInput;
}>;


export type CreateCartItemMutation = (
  { __typename?: 'Mutation' }
  & { createCartItem?: Maybe<(
    { __typename?: 'CartItem' }
    & CartItemFieldsFragment
  )> }
);

export type UpdateCartItemMutationVariables = Exact<{
  input: MutateCartItemInput;
}>;


export type UpdateCartItemMutation = (
  { __typename?: 'Mutation' }
  & { updateCartItem?: Maybe<(
    { __typename?: 'CartItem' }
    & CartItemFieldsFragment
  )> }
);

export type DeleteCartItemMutationVariables = Exact<{
  input: MutateCartItemInput;
}>;


export type DeleteCartItemMutation = (
  { __typename?: 'Mutation' }
  & { deleteCartItem?: Maybe<(
    { __typename?: 'CartItem' }
    & CartItemFieldsFragment
  )> }
);

export type CreateOrderMutationVariables = Exact<{
  input: CreateOrderInput;
}>;


export type CreateOrderMutation = (
  { __typename?: 'Mutation' }
  & { createOrder?: Maybe<(
    { __typename?: 'Order' }
    & OrderFieldsFragment
  )> }
);

export type UpdateOrderMutationVariables = Exact<{
  input: MutateOrderInput;
}>;


export type UpdateOrderMutation = (
  { __typename?: 'Mutation' }
  & { updateOrder?: Maybe<(
    { __typename?: 'Order' }
    & OrderFieldsFragment
  )> }
);

export type DeleteOrderMutationVariables = Exact<{
  input: MutateOrderInput;
}>;


export type DeleteOrderMutation = (
  { __typename?: 'Mutation' }
  & { deleteOrder?: Maybe<(
    { __typename?: 'Order' }
    & OrderFieldsFragment
  )> }
);

export type NewProductSubscriptionVariables = Exact<{
  filter?: Maybe<ProductSubscriptionFilter>;
}>;


export type NewProductSubscription = (
  { __typename?: 'Subscription' }
  & { newProduct: (
    { __typename?: 'Product' }
    & ProductFieldsFragment
  ) }
);

export type UpdatedProductSubscriptionVariables = Exact<{
  filter?: Maybe<ProductSubscriptionFilter>;
}>;


export type UpdatedProductSubscription = (
  { __typename?: 'Subscription' }
  & { updatedProduct: (
    { __typename?: 'Product' }
    & ProductFieldsFragment
  ) }
);

export type DeletedProductSubscriptionVariables = Exact<{
  filter?: Maybe<ProductSubscriptionFilter>;
}>;


export type DeletedProductSubscription = (
  { __typename?: 'Subscription' }
  & { deletedProduct: (
    { __typename?: 'Product' }
    & ProductFieldsFragment
  ) }
);

export type NewCartSubscriptionVariables = Exact<{
  filter?: Maybe<CartSubscriptionFilter>;
}>;


export type NewCartSubscription = (
  { __typename?: 'Subscription' }
  & { newCart: (
    { __typename?: 'Cart' }
    & CartFieldsFragment
  ) }
);

export type UpdatedCartSubscriptionVariables = Exact<{
  filter?: Maybe<CartSubscriptionFilter>;
}>;


export type UpdatedCartSubscription = (
  { __typename?: 'Subscription' }
  & { updatedCart: (
    { __typename?: 'Cart' }
    & CartFieldsFragment
  ) }
);

export type DeletedCartSubscriptionVariables = Exact<{
  filter?: Maybe<CartSubscriptionFilter>;
}>;


export type DeletedCartSubscription = (
  { __typename?: 'Subscription' }
  & { deletedCart: (
    { __typename?: 'Cart' }
    & CartFieldsFragment
  ) }
);

export type NewCartItemSubscriptionVariables = Exact<{
  filter?: Maybe<CartItemSubscriptionFilter>;
}>;


export type NewCartItemSubscription = (
  { __typename?: 'Subscription' }
  & { newCartItem: (
    { __typename?: 'CartItem' }
    & CartItemFieldsFragment
  ) }
);

export type UpdatedCartItemSubscriptionVariables = Exact<{
  filter?: Maybe<CartItemSubscriptionFilter>;
}>;


export type UpdatedCartItemSubscription = (
  { __typename?: 'Subscription' }
  & { updatedCartItem: (
    { __typename?: 'CartItem' }
    & CartItemFieldsFragment
  ) }
);

export type DeletedCartItemSubscriptionVariables = Exact<{
  filter?: Maybe<CartItemSubscriptionFilter>;
}>;


export type DeletedCartItemSubscription = (
  { __typename?: 'Subscription' }
  & { deletedCartItem: (
    { __typename?: 'CartItem' }
    & CartItemFieldsFragment
  ) }
);

export type NewOrderSubscriptionVariables = Exact<{
  filter?: Maybe<OrderSubscriptionFilter>;
}>;


export type NewOrderSubscription = (
  { __typename?: 'Subscription' }
  & { newOrder: (
    { __typename?: 'Order' }
    & OrderFieldsFragment
  ) }
);

export type UpdatedOrderSubscriptionVariables = Exact<{
  filter?: Maybe<OrderSubscriptionFilter>;
}>;


export type UpdatedOrderSubscription = (
  { __typename?: 'Subscription' }
  & { updatedOrder: (
    { __typename?: 'Order' }
    & OrderFieldsFragment
  ) }
);

export type DeletedOrderSubscriptionVariables = Exact<{
  filter?: Maybe<OrderSubscriptionFilter>;
}>;


export type DeletedOrderSubscription = (
  { __typename?: 'Subscription' }
  & { deletedOrder: (
    { __typename?: 'Order' }
    & OrderFieldsFragment
  ) }
);

export const ProductFieldsFragmentDoc = gql`
    fragment ProductFields on Product {
  _id
  name
  price
  description
}
    `;
export const ProductExpandedFieldsFragmentDoc = gql`
    fragment ProductExpandedFields on Product {
  _id
  name
  price
  description
}
    `;
export const CartFieldsFragmentDoc = gql`
    fragment CartFields on Cart {
  _id
  name
}
    `;
export const CartExpandedFieldsFragmentDoc = gql`
    fragment CartExpandedFields on Cart {
  _id
  name
  cartItems {
    _id
    quantity
  }
}
    `;
export const CartItemFieldsFragmentDoc = gql`
    fragment CartItemFields on CartItem {
  _id
  quantity
}
    `;
export const CartItemExpandedFieldsFragmentDoc = gql`
    fragment CartItemExpandedFields on CartItem {
  _id
  quantity
  product {
    _id
    name
    price
    description
  }
  cart {
    _id
    name
  }
}
    `;
export const OrderFieldsFragmentDoc = gql`
    fragment OrderFields on Order {
  _id
  datePlaced
}
    `;
export const OrderExpandedFieldsFragmentDoc = gql`
    fragment OrderExpandedFields on Order {
  _id
  datePlaced
  cart {
    _id
    name
  }
}
    `;
export const FindProductsDocument = gql`
    query findProducts($filter: ProductFilter, $page: PageRequest, $orderBy: OrderByInput) {
  findProducts(filter: $filter, page: $page, orderBy: $orderBy) {
    items {
      ...ProductExpandedFields
    }
    offset
    limit
    count
  }
}
    ${ProductExpandedFieldsFragmentDoc}`;

/**
 * __useFindProductsQuery__
 *
 * To run a query within a React component, call `useFindProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindProductsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      page: // value for 'page'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useFindProductsQuery(baseOptions?: Apollo.QueryHookOptions<FindProductsQuery, FindProductsQueryVariables>) {
        return Apollo.useQuery<FindProductsQuery, FindProductsQueryVariables>(FindProductsDocument, baseOptions);
      }
export function useFindProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindProductsQuery, FindProductsQueryVariables>) {
          return Apollo.useLazyQuery<FindProductsQuery, FindProductsQueryVariables>(FindProductsDocument, baseOptions);
        }
export type FindProductsQueryHookResult = ReturnType<typeof useFindProductsQuery>;
export type FindProductsLazyQueryHookResult = ReturnType<typeof useFindProductsLazyQuery>;
export type FindProductsQueryResult = Apollo.QueryResult<FindProductsQuery, FindProductsQueryVariables>;
export const GetProductDocument = gql`
    query getProduct($id: GraphbackObjectID!) {
  getProduct(id: $id) {
    ...ProductExpandedFields
  }
}
    ${ProductExpandedFieldsFragmentDoc}`;

/**
 * __useGetProductQuery__
 *
 * To run a query within a React component, call `useGetProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProductQuery(baseOptions: Apollo.QueryHookOptions<GetProductQuery, GetProductQueryVariables>) {
        return Apollo.useQuery<GetProductQuery, GetProductQueryVariables>(GetProductDocument, baseOptions);
      }
export function useGetProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductQuery, GetProductQueryVariables>) {
          return Apollo.useLazyQuery<GetProductQuery, GetProductQueryVariables>(GetProductDocument, baseOptions);
        }
export type GetProductQueryHookResult = ReturnType<typeof useGetProductQuery>;
export type GetProductLazyQueryHookResult = ReturnType<typeof useGetProductLazyQuery>;
export type GetProductQueryResult = Apollo.QueryResult<GetProductQuery, GetProductQueryVariables>;
export const FindCartsDocument = gql`
    query findCarts($filter: CartFilter, $page: PageRequest, $orderBy: OrderByInput) {
  findCarts(filter: $filter, page: $page, orderBy: $orderBy) {
    items {
      ...CartExpandedFields
    }
    offset
    limit
    count
  }
}
    ${CartExpandedFieldsFragmentDoc}`;

/**
 * __useFindCartsQuery__
 *
 * To run a query within a React component, call `useFindCartsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindCartsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindCartsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      page: // value for 'page'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useFindCartsQuery(baseOptions?: Apollo.QueryHookOptions<FindCartsQuery, FindCartsQueryVariables>) {
        return Apollo.useQuery<FindCartsQuery, FindCartsQueryVariables>(FindCartsDocument, baseOptions);
      }
export function useFindCartsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindCartsQuery, FindCartsQueryVariables>) {
          return Apollo.useLazyQuery<FindCartsQuery, FindCartsQueryVariables>(FindCartsDocument, baseOptions);
        }
export type FindCartsQueryHookResult = ReturnType<typeof useFindCartsQuery>;
export type FindCartsLazyQueryHookResult = ReturnType<typeof useFindCartsLazyQuery>;
export type FindCartsQueryResult = Apollo.QueryResult<FindCartsQuery, FindCartsQueryVariables>;
export const GetCartDocument = gql`
    query getCart($id: GraphbackObjectID!) {
  getCart(id: $id) {
    ...CartExpandedFields
  }
}
    ${CartExpandedFieldsFragmentDoc}`;

/**
 * __useGetCartQuery__
 *
 * To run a query within a React component, call `useGetCartQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCartQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCartQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCartQuery(baseOptions: Apollo.QueryHookOptions<GetCartQuery, GetCartQueryVariables>) {
        return Apollo.useQuery<GetCartQuery, GetCartQueryVariables>(GetCartDocument, baseOptions);
      }
export function useGetCartLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCartQuery, GetCartQueryVariables>) {
          return Apollo.useLazyQuery<GetCartQuery, GetCartQueryVariables>(GetCartDocument, baseOptions);
        }
export type GetCartQueryHookResult = ReturnType<typeof useGetCartQuery>;
export type GetCartLazyQueryHookResult = ReturnType<typeof useGetCartLazyQuery>;
export type GetCartQueryResult = Apollo.QueryResult<GetCartQuery, GetCartQueryVariables>;
export const FindCartItemsDocument = gql`
    query findCartItems($filter: CartItemFilter, $page: PageRequest, $orderBy: OrderByInput) {
  findCartItems(filter: $filter, page: $page, orderBy: $orderBy) {
    items {
      ...CartItemExpandedFields
    }
    offset
    limit
    count
  }
}
    ${CartItemExpandedFieldsFragmentDoc}`;

/**
 * __useFindCartItemsQuery__
 *
 * To run a query within a React component, call `useFindCartItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindCartItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindCartItemsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      page: // value for 'page'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useFindCartItemsQuery(baseOptions?: Apollo.QueryHookOptions<FindCartItemsQuery, FindCartItemsQueryVariables>) {
        return Apollo.useQuery<FindCartItemsQuery, FindCartItemsQueryVariables>(FindCartItemsDocument, baseOptions);
      }
export function useFindCartItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindCartItemsQuery, FindCartItemsQueryVariables>) {
          return Apollo.useLazyQuery<FindCartItemsQuery, FindCartItemsQueryVariables>(FindCartItemsDocument, baseOptions);
        }
export type FindCartItemsQueryHookResult = ReturnType<typeof useFindCartItemsQuery>;
export type FindCartItemsLazyQueryHookResult = ReturnType<typeof useFindCartItemsLazyQuery>;
export type FindCartItemsQueryResult = Apollo.QueryResult<FindCartItemsQuery, FindCartItemsQueryVariables>;
export const GetCartItemDocument = gql`
    query getCartItem($id: GraphbackObjectID!) {
  getCartItem(id: $id) {
    ...CartItemExpandedFields
  }
}
    ${CartItemExpandedFieldsFragmentDoc}`;

/**
 * __useGetCartItemQuery__
 *
 * To run a query within a React component, call `useGetCartItemQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCartItemQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCartItemQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCartItemQuery(baseOptions: Apollo.QueryHookOptions<GetCartItemQuery, GetCartItemQueryVariables>) {
        return Apollo.useQuery<GetCartItemQuery, GetCartItemQueryVariables>(GetCartItemDocument, baseOptions);
      }
export function useGetCartItemLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCartItemQuery, GetCartItemQueryVariables>) {
          return Apollo.useLazyQuery<GetCartItemQuery, GetCartItemQueryVariables>(GetCartItemDocument, baseOptions);
        }
export type GetCartItemQueryHookResult = ReturnType<typeof useGetCartItemQuery>;
export type GetCartItemLazyQueryHookResult = ReturnType<typeof useGetCartItemLazyQuery>;
export type GetCartItemQueryResult = Apollo.QueryResult<GetCartItemQuery, GetCartItemQueryVariables>;
export const FindOrdersDocument = gql`
    query findOrders($filter: OrderFilter, $page: PageRequest, $orderBy: OrderByInput) {
  findOrders(filter: $filter, page: $page, orderBy: $orderBy) {
    items {
      ...OrderExpandedFields
    }
    offset
    limit
    count
  }
}
    ${OrderExpandedFieldsFragmentDoc}`;

/**
 * __useFindOrdersQuery__
 *
 * To run a query within a React component, call `useFindOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindOrdersQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      page: // value for 'page'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useFindOrdersQuery(baseOptions?: Apollo.QueryHookOptions<FindOrdersQuery, FindOrdersQueryVariables>) {
        return Apollo.useQuery<FindOrdersQuery, FindOrdersQueryVariables>(FindOrdersDocument, baseOptions);
      }
export function useFindOrdersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindOrdersQuery, FindOrdersQueryVariables>) {
          return Apollo.useLazyQuery<FindOrdersQuery, FindOrdersQueryVariables>(FindOrdersDocument, baseOptions);
        }
export type FindOrdersQueryHookResult = ReturnType<typeof useFindOrdersQuery>;
export type FindOrdersLazyQueryHookResult = ReturnType<typeof useFindOrdersLazyQuery>;
export type FindOrdersQueryResult = Apollo.QueryResult<FindOrdersQuery, FindOrdersQueryVariables>;
export const GetOrderDocument = gql`
    query getOrder($id: GraphbackObjectID!) {
  getOrder(id: $id) {
    ...OrderExpandedFields
  }
}
    ${OrderExpandedFieldsFragmentDoc}`;

/**
 * __useGetOrderQuery__
 *
 * To run a query within a React component, call `useGetOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrderQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetOrderQuery(baseOptions: Apollo.QueryHookOptions<GetOrderQuery, GetOrderQueryVariables>) {
        return Apollo.useQuery<GetOrderQuery, GetOrderQueryVariables>(GetOrderDocument, baseOptions);
      }
export function useGetOrderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOrderQuery, GetOrderQueryVariables>) {
          return Apollo.useLazyQuery<GetOrderQuery, GetOrderQueryVariables>(GetOrderDocument, baseOptions);
        }
export type GetOrderQueryHookResult = ReturnType<typeof useGetOrderQuery>;
export type GetOrderLazyQueryHookResult = ReturnType<typeof useGetOrderLazyQuery>;
export type GetOrderQueryResult = Apollo.QueryResult<GetOrderQuery, GetOrderQueryVariables>;
export const CreateProductDocument = gql`
    mutation createProduct($input: CreateProductInput!) {
  createProduct(input: $input) {
    ...ProductFields
  }
}
    ${ProductFieldsFragmentDoc}`;
export type CreateProductMutationFn = Apollo.MutationFunction<CreateProductMutation, CreateProductMutationVariables>;

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateProductMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductMutation, CreateProductMutationVariables>) {
        return Apollo.useMutation<CreateProductMutation, CreateProductMutationVariables>(CreateProductDocument, baseOptions);
      }
export type CreateProductMutationHookResult = ReturnType<typeof useCreateProductMutation>;
export type CreateProductMutationResult = Apollo.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<CreateProductMutation, CreateProductMutationVariables>;
export const UpdateProductDocument = gql`
    mutation updateProduct($input: MutateProductInput!) {
  updateProduct(input: $input) {
    ...ProductFields
  }
}
    ${ProductFieldsFragmentDoc}`;
export type UpdateProductMutationFn = Apollo.MutationFunction<UpdateProductMutation, UpdateProductMutationVariables>;

/**
 * __useUpdateProductMutation__
 *
 * To run a mutation, you first call `useUpdateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProductMutation, { data, loading, error }] = useUpdateProductMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateProductMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProductMutation, UpdateProductMutationVariables>) {
        return Apollo.useMutation<UpdateProductMutation, UpdateProductMutationVariables>(UpdateProductDocument, baseOptions);
      }
export type UpdateProductMutationHookResult = ReturnType<typeof useUpdateProductMutation>;
export type UpdateProductMutationResult = Apollo.MutationResult<UpdateProductMutation>;
export type UpdateProductMutationOptions = Apollo.BaseMutationOptions<UpdateProductMutation, UpdateProductMutationVariables>;
export const DeleteProductDocument = gql`
    mutation deleteProduct($input: MutateProductInput!) {
  deleteProduct(input: $input) {
    ...ProductFields
  }
}
    ${ProductFieldsFragmentDoc}`;
export type DeleteProductMutationFn = Apollo.MutationFunction<DeleteProductMutation, DeleteProductMutationVariables>;

/**
 * __useDeleteProductMutation__
 *
 * To run a mutation, you first call `useDeleteProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProductMutation, { data, loading, error }] = useDeleteProductMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteProductMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProductMutation, DeleteProductMutationVariables>) {
        return Apollo.useMutation<DeleteProductMutation, DeleteProductMutationVariables>(DeleteProductDocument, baseOptions);
      }
export type DeleteProductMutationHookResult = ReturnType<typeof useDeleteProductMutation>;
export type DeleteProductMutationResult = Apollo.MutationResult<DeleteProductMutation>;
export type DeleteProductMutationOptions = Apollo.BaseMutationOptions<DeleteProductMutation, DeleteProductMutationVariables>;
export const CreateCartDocument = gql`
    mutation createCart($input: CreateCartInput!) {
  createCart(input: $input) {
    ...CartFields
  }
}
    ${CartFieldsFragmentDoc}`;
export type CreateCartMutationFn = Apollo.MutationFunction<CreateCartMutation, CreateCartMutationVariables>;

/**
 * __useCreateCartMutation__
 *
 * To run a mutation, you first call `useCreateCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCartMutation, { data, loading, error }] = useCreateCartMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCartMutation(baseOptions?: Apollo.MutationHookOptions<CreateCartMutation, CreateCartMutationVariables>) {
        return Apollo.useMutation<CreateCartMutation, CreateCartMutationVariables>(CreateCartDocument, baseOptions);
      }
export type CreateCartMutationHookResult = ReturnType<typeof useCreateCartMutation>;
export type CreateCartMutationResult = Apollo.MutationResult<CreateCartMutation>;
export type CreateCartMutationOptions = Apollo.BaseMutationOptions<CreateCartMutation, CreateCartMutationVariables>;
export const UpdateCartDocument = gql`
    mutation updateCart($input: MutateCartInput!) {
  updateCart(input: $input) {
    ...CartFields
  }
}
    ${CartFieldsFragmentDoc}`;
export type UpdateCartMutationFn = Apollo.MutationFunction<UpdateCartMutation, UpdateCartMutationVariables>;

/**
 * __useUpdateCartMutation__
 *
 * To run a mutation, you first call `useUpdateCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCartMutation, { data, loading, error }] = useUpdateCartMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCartMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCartMutation, UpdateCartMutationVariables>) {
        return Apollo.useMutation<UpdateCartMutation, UpdateCartMutationVariables>(UpdateCartDocument, baseOptions);
      }
export type UpdateCartMutationHookResult = ReturnType<typeof useUpdateCartMutation>;
export type UpdateCartMutationResult = Apollo.MutationResult<UpdateCartMutation>;
export type UpdateCartMutationOptions = Apollo.BaseMutationOptions<UpdateCartMutation, UpdateCartMutationVariables>;
export const DeleteCartDocument = gql`
    mutation deleteCart($input: MutateCartInput!) {
  deleteCart(input: $input) {
    ...CartFields
  }
}
    ${CartFieldsFragmentDoc}`;
export type DeleteCartMutationFn = Apollo.MutationFunction<DeleteCartMutation, DeleteCartMutationVariables>;

/**
 * __useDeleteCartMutation__
 *
 * To run a mutation, you first call `useDeleteCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCartMutation, { data, loading, error }] = useDeleteCartMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteCartMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCartMutation, DeleteCartMutationVariables>) {
        return Apollo.useMutation<DeleteCartMutation, DeleteCartMutationVariables>(DeleteCartDocument, baseOptions);
      }
export type DeleteCartMutationHookResult = ReturnType<typeof useDeleteCartMutation>;
export type DeleteCartMutationResult = Apollo.MutationResult<DeleteCartMutation>;
export type DeleteCartMutationOptions = Apollo.BaseMutationOptions<DeleteCartMutation, DeleteCartMutationVariables>;
export const CreateCartItemDocument = gql`
    mutation createCartItem($input: CreateCartItemInput!) {
  createCartItem(input: $input) {
    ...CartItemFields
  }
}
    ${CartItemFieldsFragmentDoc}`;
export type CreateCartItemMutationFn = Apollo.MutationFunction<CreateCartItemMutation, CreateCartItemMutationVariables>;

/**
 * __useCreateCartItemMutation__
 *
 * To run a mutation, you first call `useCreateCartItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCartItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCartItemMutation, { data, loading, error }] = useCreateCartItemMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCartItemMutation(baseOptions?: Apollo.MutationHookOptions<CreateCartItemMutation, CreateCartItemMutationVariables>) {
        return Apollo.useMutation<CreateCartItemMutation, CreateCartItemMutationVariables>(CreateCartItemDocument, baseOptions);
      }
export type CreateCartItemMutationHookResult = ReturnType<typeof useCreateCartItemMutation>;
export type CreateCartItemMutationResult = Apollo.MutationResult<CreateCartItemMutation>;
export type CreateCartItemMutationOptions = Apollo.BaseMutationOptions<CreateCartItemMutation, CreateCartItemMutationVariables>;
export const UpdateCartItemDocument = gql`
    mutation updateCartItem($input: MutateCartItemInput!) {
  updateCartItem(input: $input) {
    ...CartItemFields
  }
}
    ${CartItemFieldsFragmentDoc}`;
export type UpdateCartItemMutationFn = Apollo.MutationFunction<UpdateCartItemMutation, UpdateCartItemMutationVariables>;

/**
 * __useUpdateCartItemMutation__
 *
 * To run a mutation, you first call `useUpdateCartItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCartItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCartItemMutation, { data, loading, error }] = useUpdateCartItemMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCartItemMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCartItemMutation, UpdateCartItemMutationVariables>) {
        return Apollo.useMutation<UpdateCartItemMutation, UpdateCartItemMutationVariables>(UpdateCartItemDocument, baseOptions);
      }
export type UpdateCartItemMutationHookResult = ReturnType<typeof useUpdateCartItemMutation>;
export type UpdateCartItemMutationResult = Apollo.MutationResult<UpdateCartItemMutation>;
export type UpdateCartItemMutationOptions = Apollo.BaseMutationOptions<UpdateCartItemMutation, UpdateCartItemMutationVariables>;
export const DeleteCartItemDocument = gql`
    mutation deleteCartItem($input: MutateCartItemInput!) {
  deleteCartItem(input: $input) {
    ...CartItemFields
  }
}
    ${CartItemFieldsFragmentDoc}`;
export type DeleteCartItemMutationFn = Apollo.MutationFunction<DeleteCartItemMutation, DeleteCartItemMutationVariables>;

/**
 * __useDeleteCartItemMutation__
 *
 * To run a mutation, you first call `useDeleteCartItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCartItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCartItemMutation, { data, loading, error }] = useDeleteCartItemMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteCartItemMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCartItemMutation, DeleteCartItemMutationVariables>) {
        return Apollo.useMutation<DeleteCartItemMutation, DeleteCartItemMutationVariables>(DeleteCartItemDocument, baseOptions);
      }
export type DeleteCartItemMutationHookResult = ReturnType<typeof useDeleteCartItemMutation>;
export type DeleteCartItemMutationResult = Apollo.MutationResult<DeleteCartItemMutation>;
export type DeleteCartItemMutationOptions = Apollo.BaseMutationOptions<DeleteCartItemMutation, DeleteCartItemMutationVariables>;
export const CreateOrderDocument = gql`
    mutation createOrder($input: CreateOrderInput!) {
  createOrder(input: $input) {
    ...OrderFields
  }
}
    ${OrderFieldsFragmentDoc}`;
export type CreateOrderMutationFn = Apollo.MutationFunction<CreateOrderMutation, CreateOrderMutationVariables>;

/**
 * __useCreateOrderMutation__
 *
 * To run a mutation, you first call `useCreateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrderMutation, { data, loading, error }] = useCreateOrderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOrderMutation(baseOptions?: Apollo.MutationHookOptions<CreateOrderMutation, CreateOrderMutationVariables>) {
        return Apollo.useMutation<CreateOrderMutation, CreateOrderMutationVariables>(CreateOrderDocument, baseOptions);
      }
export type CreateOrderMutationHookResult = ReturnType<typeof useCreateOrderMutation>;
export type CreateOrderMutationResult = Apollo.MutationResult<CreateOrderMutation>;
export type CreateOrderMutationOptions = Apollo.BaseMutationOptions<CreateOrderMutation, CreateOrderMutationVariables>;
export const UpdateOrderDocument = gql`
    mutation updateOrder($input: MutateOrderInput!) {
  updateOrder(input: $input) {
    ...OrderFields
  }
}
    ${OrderFieldsFragmentDoc}`;
export type UpdateOrderMutationFn = Apollo.MutationFunction<UpdateOrderMutation, UpdateOrderMutationVariables>;

/**
 * __useUpdateOrderMutation__
 *
 * To run a mutation, you first call `useUpdateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOrderMutation, { data, loading, error }] = useUpdateOrderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOrderMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOrderMutation, UpdateOrderMutationVariables>) {
        return Apollo.useMutation<UpdateOrderMutation, UpdateOrderMutationVariables>(UpdateOrderDocument, baseOptions);
      }
export type UpdateOrderMutationHookResult = ReturnType<typeof useUpdateOrderMutation>;
export type UpdateOrderMutationResult = Apollo.MutationResult<UpdateOrderMutation>;
export type UpdateOrderMutationOptions = Apollo.BaseMutationOptions<UpdateOrderMutation, UpdateOrderMutationVariables>;
export const DeleteOrderDocument = gql`
    mutation deleteOrder($input: MutateOrderInput!) {
  deleteOrder(input: $input) {
    ...OrderFields
  }
}
    ${OrderFieldsFragmentDoc}`;
export type DeleteOrderMutationFn = Apollo.MutationFunction<DeleteOrderMutation, DeleteOrderMutationVariables>;

/**
 * __useDeleteOrderMutation__
 *
 * To run a mutation, you first call `useDeleteOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOrderMutation, { data, loading, error }] = useDeleteOrderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteOrderMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOrderMutation, DeleteOrderMutationVariables>) {
        return Apollo.useMutation<DeleteOrderMutation, DeleteOrderMutationVariables>(DeleteOrderDocument, baseOptions);
      }
export type DeleteOrderMutationHookResult = ReturnType<typeof useDeleteOrderMutation>;
export type DeleteOrderMutationResult = Apollo.MutationResult<DeleteOrderMutation>;
export type DeleteOrderMutationOptions = Apollo.BaseMutationOptions<DeleteOrderMutation, DeleteOrderMutationVariables>;
export const NewProductDocument = gql`
    subscription newProduct($filter: ProductSubscriptionFilter) {
  newProduct(filter: $filter) {
    ...ProductFields
  }
}
    ${ProductFieldsFragmentDoc}`;

/**
 * __useNewProductSubscription__
 *
 * To run a query within a React component, call `useNewProductSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNewProductSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewProductSubscription({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useNewProductSubscription(baseOptions?: Apollo.SubscriptionHookOptions<NewProductSubscription, NewProductSubscriptionVariables>) {
        return Apollo.useSubscription<NewProductSubscription, NewProductSubscriptionVariables>(NewProductDocument, baseOptions);
      }
export type NewProductSubscriptionHookResult = ReturnType<typeof useNewProductSubscription>;
export type NewProductSubscriptionResult = Apollo.SubscriptionResult<NewProductSubscription>;
export const UpdatedProductDocument = gql`
    subscription updatedProduct($filter: ProductSubscriptionFilter) {
  updatedProduct(filter: $filter) {
    ...ProductFields
  }
}
    ${ProductFieldsFragmentDoc}`;

/**
 * __useUpdatedProductSubscription__
 *
 * To run a query within a React component, call `useUpdatedProductSubscription` and pass it any options that fit your needs.
 * When your component renders, `useUpdatedProductSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUpdatedProductSubscription({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useUpdatedProductSubscription(baseOptions?: Apollo.SubscriptionHookOptions<UpdatedProductSubscription, UpdatedProductSubscriptionVariables>) {
        return Apollo.useSubscription<UpdatedProductSubscription, UpdatedProductSubscriptionVariables>(UpdatedProductDocument, baseOptions);
      }
export type UpdatedProductSubscriptionHookResult = ReturnType<typeof useUpdatedProductSubscription>;
export type UpdatedProductSubscriptionResult = Apollo.SubscriptionResult<UpdatedProductSubscription>;
export const DeletedProductDocument = gql`
    subscription deletedProduct($filter: ProductSubscriptionFilter) {
  deletedProduct(filter: $filter) {
    ...ProductFields
  }
}
    ${ProductFieldsFragmentDoc}`;

/**
 * __useDeletedProductSubscription__
 *
 * To run a query within a React component, call `useDeletedProductSubscription` and pass it any options that fit your needs.
 * When your component renders, `useDeletedProductSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDeletedProductSubscription({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useDeletedProductSubscription(baseOptions?: Apollo.SubscriptionHookOptions<DeletedProductSubscription, DeletedProductSubscriptionVariables>) {
        return Apollo.useSubscription<DeletedProductSubscription, DeletedProductSubscriptionVariables>(DeletedProductDocument, baseOptions);
      }
export type DeletedProductSubscriptionHookResult = ReturnType<typeof useDeletedProductSubscription>;
export type DeletedProductSubscriptionResult = Apollo.SubscriptionResult<DeletedProductSubscription>;
export const NewCartDocument = gql`
    subscription newCart($filter: CartSubscriptionFilter) {
  newCart(filter: $filter) {
    ...CartFields
  }
}
    ${CartFieldsFragmentDoc}`;

/**
 * __useNewCartSubscription__
 *
 * To run a query within a React component, call `useNewCartSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNewCartSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewCartSubscription({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useNewCartSubscription(baseOptions?: Apollo.SubscriptionHookOptions<NewCartSubscription, NewCartSubscriptionVariables>) {
        return Apollo.useSubscription<NewCartSubscription, NewCartSubscriptionVariables>(NewCartDocument, baseOptions);
      }
export type NewCartSubscriptionHookResult = ReturnType<typeof useNewCartSubscription>;
export type NewCartSubscriptionResult = Apollo.SubscriptionResult<NewCartSubscription>;
export const UpdatedCartDocument = gql`
    subscription updatedCart($filter: CartSubscriptionFilter) {
  updatedCart(filter: $filter) {
    ...CartFields
  }
}
    ${CartFieldsFragmentDoc}`;

/**
 * __useUpdatedCartSubscription__
 *
 * To run a query within a React component, call `useUpdatedCartSubscription` and pass it any options that fit your needs.
 * When your component renders, `useUpdatedCartSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUpdatedCartSubscription({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useUpdatedCartSubscription(baseOptions?: Apollo.SubscriptionHookOptions<UpdatedCartSubscription, UpdatedCartSubscriptionVariables>) {
        return Apollo.useSubscription<UpdatedCartSubscription, UpdatedCartSubscriptionVariables>(UpdatedCartDocument, baseOptions);
      }
export type UpdatedCartSubscriptionHookResult = ReturnType<typeof useUpdatedCartSubscription>;
export type UpdatedCartSubscriptionResult = Apollo.SubscriptionResult<UpdatedCartSubscription>;
export const DeletedCartDocument = gql`
    subscription deletedCart($filter: CartSubscriptionFilter) {
  deletedCart(filter: $filter) {
    ...CartFields
  }
}
    ${CartFieldsFragmentDoc}`;

/**
 * __useDeletedCartSubscription__
 *
 * To run a query within a React component, call `useDeletedCartSubscription` and pass it any options that fit your needs.
 * When your component renders, `useDeletedCartSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDeletedCartSubscription({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useDeletedCartSubscription(baseOptions?: Apollo.SubscriptionHookOptions<DeletedCartSubscription, DeletedCartSubscriptionVariables>) {
        return Apollo.useSubscription<DeletedCartSubscription, DeletedCartSubscriptionVariables>(DeletedCartDocument, baseOptions);
      }
export type DeletedCartSubscriptionHookResult = ReturnType<typeof useDeletedCartSubscription>;
export type DeletedCartSubscriptionResult = Apollo.SubscriptionResult<DeletedCartSubscription>;
export const NewCartItemDocument = gql`
    subscription newCartItem($filter: CartItemSubscriptionFilter) {
  newCartItem(filter: $filter) {
    ...CartItemFields
  }
}
    ${CartItemFieldsFragmentDoc}`;

/**
 * __useNewCartItemSubscription__
 *
 * To run a query within a React component, call `useNewCartItemSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNewCartItemSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewCartItemSubscription({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useNewCartItemSubscription(baseOptions?: Apollo.SubscriptionHookOptions<NewCartItemSubscription, NewCartItemSubscriptionVariables>) {
        return Apollo.useSubscription<NewCartItemSubscription, NewCartItemSubscriptionVariables>(NewCartItemDocument, baseOptions);
      }
export type NewCartItemSubscriptionHookResult = ReturnType<typeof useNewCartItemSubscription>;
export type NewCartItemSubscriptionResult = Apollo.SubscriptionResult<NewCartItemSubscription>;
export const UpdatedCartItemDocument = gql`
    subscription updatedCartItem($filter: CartItemSubscriptionFilter) {
  updatedCartItem(filter: $filter) {
    ...CartItemFields
  }
}
    ${CartItemFieldsFragmentDoc}`;

/**
 * __useUpdatedCartItemSubscription__
 *
 * To run a query within a React component, call `useUpdatedCartItemSubscription` and pass it any options that fit your needs.
 * When your component renders, `useUpdatedCartItemSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUpdatedCartItemSubscription({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useUpdatedCartItemSubscription(baseOptions?: Apollo.SubscriptionHookOptions<UpdatedCartItemSubscription, UpdatedCartItemSubscriptionVariables>) {
        return Apollo.useSubscription<UpdatedCartItemSubscription, UpdatedCartItemSubscriptionVariables>(UpdatedCartItemDocument, baseOptions);
      }
export type UpdatedCartItemSubscriptionHookResult = ReturnType<typeof useUpdatedCartItemSubscription>;
export type UpdatedCartItemSubscriptionResult = Apollo.SubscriptionResult<UpdatedCartItemSubscription>;
export const DeletedCartItemDocument = gql`
    subscription deletedCartItem($filter: CartItemSubscriptionFilter) {
  deletedCartItem(filter: $filter) {
    ...CartItemFields
  }
}
    ${CartItemFieldsFragmentDoc}`;

/**
 * __useDeletedCartItemSubscription__
 *
 * To run a query within a React component, call `useDeletedCartItemSubscription` and pass it any options that fit your needs.
 * When your component renders, `useDeletedCartItemSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDeletedCartItemSubscription({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useDeletedCartItemSubscription(baseOptions?: Apollo.SubscriptionHookOptions<DeletedCartItemSubscription, DeletedCartItemSubscriptionVariables>) {
        return Apollo.useSubscription<DeletedCartItemSubscription, DeletedCartItemSubscriptionVariables>(DeletedCartItemDocument, baseOptions);
      }
export type DeletedCartItemSubscriptionHookResult = ReturnType<typeof useDeletedCartItemSubscription>;
export type DeletedCartItemSubscriptionResult = Apollo.SubscriptionResult<DeletedCartItemSubscription>;
export const NewOrderDocument = gql`
    subscription newOrder($filter: OrderSubscriptionFilter) {
  newOrder(filter: $filter) {
    ...OrderFields
  }
}
    ${OrderFieldsFragmentDoc}`;

/**
 * __useNewOrderSubscription__
 *
 * To run a query within a React component, call `useNewOrderSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNewOrderSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewOrderSubscription({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useNewOrderSubscription(baseOptions?: Apollo.SubscriptionHookOptions<NewOrderSubscription, NewOrderSubscriptionVariables>) {
        return Apollo.useSubscription<NewOrderSubscription, NewOrderSubscriptionVariables>(NewOrderDocument, baseOptions);
      }
export type NewOrderSubscriptionHookResult = ReturnType<typeof useNewOrderSubscription>;
export type NewOrderSubscriptionResult = Apollo.SubscriptionResult<NewOrderSubscription>;
export const UpdatedOrderDocument = gql`
    subscription updatedOrder($filter: OrderSubscriptionFilter) {
  updatedOrder(filter: $filter) {
    ...OrderFields
  }
}
    ${OrderFieldsFragmentDoc}`;

/**
 * __useUpdatedOrderSubscription__
 *
 * To run a query within a React component, call `useUpdatedOrderSubscription` and pass it any options that fit your needs.
 * When your component renders, `useUpdatedOrderSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUpdatedOrderSubscription({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useUpdatedOrderSubscription(baseOptions?: Apollo.SubscriptionHookOptions<UpdatedOrderSubscription, UpdatedOrderSubscriptionVariables>) {
        return Apollo.useSubscription<UpdatedOrderSubscription, UpdatedOrderSubscriptionVariables>(UpdatedOrderDocument, baseOptions);
      }
export type UpdatedOrderSubscriptionHookResult = ReturnType<typeof useUpdatedOrderSubscription>;
export type UpdatedOrderSubscriptionResult = Apollo.SubscriptionResult<UpdatedOrderSubscription>;
export const DeletedOrderDocument = gql`
    subscription deletedOrder($filter: OrderSubscriptionFilter) {
  deletedOrder(filter: $filter) {
    ...OrderFields
  }
}
    ${OrderFieldsFragmentDoc}`;

/**
 * __useDeletedOrderSubscription__
 *
 * To run a query within a React component, call `useDeletedOrderSubscription` and pass it any options that fit your needs.
 * When your component renders, `useDeletedOrderSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDeletedOrderSubscription({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useDeletedOrderSubscription(baseOptions?: Apollo.SubscriptionHookOptions<DeletedOrderSubscription, DeletedOrderSubscriptionVariables>) {
        return Apollo.useSubscription<DeletedOrderSubscription, DeletedOrderSubscriptionVariables>(DeletedOrderDocument, baseOptions);
      }
export type DeletedOrderSubscriptionHookResult = ReturnType<typeof useDeletedOrderSubscription>;
export type DeletedOrderSubscriptionResult = Apollo.SubscriptionResult<DeletedOrderSubscription>;