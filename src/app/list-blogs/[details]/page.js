import IndividualDetailComponent from "@/app/components/individualDetails";

async function fetchIndividualBlogDetails(currentBlogId){
    const response = await fetch(`http://localhost:3001/api/blogs/individualDetailView?id=${currentBlogId}`, {
      method: "GET",
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error('Failed to fetch individual blog details: ' + response.status);
  }
    const data = await response.json();
    if(data?.success) return data.data;
 
}

export default async function showDetails({ params }) {
  const { details } = params;
  const blogData = await fetchIndividualBlogDetails(details); 
  console.log('blogData', blogData)
  return(
    <div> 
      <IndividualDetailComponent blogData={blogData}/>
    </div>
  );
}
