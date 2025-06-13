type Props = {
  params: {
    productId: string;
  };
};

export default function ProductPage({ params }: Props) {
  const { productId } = params;

  return <div>Product ID: {productId}</div>;
}