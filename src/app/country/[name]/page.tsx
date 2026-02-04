import DetailsScreen from '@/screens/Details'

export default async function Page({
  params,
}: {
  params: Promise<{ name: string }>
}) {
  const { name } = await params
  return <DetailsScreen name={name} />
}
