import AddCurrency from "../../../Components/currency/AddCurrency"
import AllCurrency from "../../../Components/currency/allCurrency/AllCurrency"
import Currency from "../../../Components/currency/Currency"


function CurrencyPage() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="row">
                        <AllCurrency />
                        <AddCurrency />
                    </div>
                </div>
            </div>
        </>
    )
}
export default CurrencyPage