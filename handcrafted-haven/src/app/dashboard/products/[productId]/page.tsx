export default async function ProductPage({ params }: { params: { productId: string } }) {
    const { productId } = params;
    return (
        <div>Product {productId}</div>
    )
}