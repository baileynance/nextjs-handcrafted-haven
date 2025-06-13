type PageProps = {
    params: {
      productId: string;
    };
  };
  
  export default function ProductPage({ params }: PageProps) {
    return <div>Product ID: {params.productId}</div>;
  }
  