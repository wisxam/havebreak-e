import SpecificProduct from "@/app/components/specificProduct";

const FullProduntInfo = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  return (
    <div>
      <SpecificProduct productId={id} />
    </div>
  );
};

export default FullProduntInfo;
