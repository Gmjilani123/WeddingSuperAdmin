import AddBlogCategory from "../../../Components/blog/categoris/AddBlogCategory"
import Category from "../../../Components/blog/categoris/Catagory"


function CategoryPage() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="row">
                        <Category />
                        <AddBlogCategory />
                    </div>
                </div>
            </div>
        </>
    )
}
export default CategoryPage