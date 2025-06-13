export default function ProductPage({
    params,
  }: {
    params: { productId: string };
  }) {
    return <div>Product ID: {params.productId}</div>;
}
  