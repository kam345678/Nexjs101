type PageProps = {
  params: {
    id: string;
  };
};

export default function MemberPage({ params }: PageProps) {
  const { id } = params;
  return (
    <div>
      <h1 className="text-2xl font-bold text-red-500">Member Detail Page id:{id}.</h1>
    </div>
  );
}