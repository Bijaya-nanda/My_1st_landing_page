export default function ShippingCancellation() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Shipping & Cancellation Policy</h1>

      <div className="prose prose-lg">
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Digital Product Delivery</h2>
          <p className="mb-4">
            The shipping is not applicable on this website as we only sell Digital Products. Your orders will be delivered immediately after the purchase to your email. We will send a message on your WhatsApp as well.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Cancellation Policy</h2>
          <p className="mb-4">
            Due to the nature of the products, cancellation and refunds are not applicable.
          </p>
          <p className="mb-4">
            Please reach out to us on our support email: <a href="mailto:corekits@gmail.com" className="text-blue-600 hover:underline">corekits@gmail.com</a>, and we will solve your queries in less than 24 hours.
          </p>
        </section>
      </div>
    </div>
  );
}
