import AddLanguage from "../../../Components/settings/language/addLanguage/AddLanguage"
import Language from "../../../Components/settings/language/Language"

function LanguagePage() {
    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="row">
                        <Language />
                        <AddLanguage />
                    </div>
                </div>
            </div>
        </>
    )
}
export default LanguagePage