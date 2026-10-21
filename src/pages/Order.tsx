import { SEO } from "@/components/seo";
import { OrderPlaceholder } from "@/components/order/order-placeholder";

export default function OrderPage() {
  return (
    <>
      <SEO
        title="Order"
        description="Place your order online from Kaon Food Hub. Choose your branch, fill in your details, and send via Messenger."
        path="/order"
      />
      <OrderPlaceholder />
    </>
  );
}
