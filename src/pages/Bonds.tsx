import useBonds from "@/hooks/useBonds";

const Bonds = () => {
  const { data, error, isLoading } = useBonds();

  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error) return <div>Error: {error.message}</div>;
  console.log(data)

  return (
    <div className="h-screen flex justify-center items-center">
    </div>
  );
};

export default Bonds;
