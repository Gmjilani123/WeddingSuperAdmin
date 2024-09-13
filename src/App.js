import './assets/css/vendors.css';
import './assets/css/aiz-core.css';
import 'react-toastify/dist/ReactToastify.css';


import { Navigate, Route, Routes } from 'react-router-dom';
import AdminPage from './Pages/admin';
import DashboardPage from './Pages/dashboardPage';
import FooterComp from './Components/commonComponents/footer/Footer';
import FreeMembersPage from './Pages/members/freeMembersPage';
import AddNewMembersPage from './Pages/members/freeMembersPage/addnewMembersPage';
import MembersDetail from './Components/members/freeMembers/allMembers/MembersDetail';
import MembersProfilesEdit from './Components/members/freeMembers/allMembers/MembersProfilesEdit';
import BulkMemberAddPage from './Pages/members/bulkMemberAddPage';
import DeletedMembersPage from './Pages/members/deletedMembersPage';
import ReportedMembersPage from './Pages/members/reportedMembersPage';
import UnApprovedProfilePicsPages from './Pages/unApprovedProfilePicsPage';
import ReligionsPage from './Pages/members/profileAttribute/religionsPage';
import CastePage from './Pages/members/profileAttribute/castePage';
import SubCastepage from './Pages/members/profileAttribute/subCastePage';
import EditSubCasteInfo from './Components/members/profileAttribute/subCaste/EditSubCasteInfo';
import MemberLanguagePage from './Pages/members/profileAttribute/memberLanguagePage';
import CountryPage from './Pages/members/profileAttribute/countryPage';
import StatePage from './Pages/members/profileAttribute/statePage';
import EditStateInfo from './Components/members/profileAttribute/state/EditStateInfo';
import CityPage from './Pages/members/profileAttribute/cityPage';
import EditCityInfo from './Components/members/profileAttribute/cities/EditCityInfo';
import OnBehalfPage from './Pages/members/profileAttribute/onBehalfPage';
import FamilyValuesPage from './Pages/members/profileAttribute/familyValuesPage';
import FamilyStatusPage from './Pages/members/profileAttribute/familyStatusPage';
import MaritalStatusPage from './Pages/members/profileAttribute/maritalStatusPage';
import WalletTransitionHistoryPages from './Pages/wallet/wallet-transition-history/Index'
import ManualWalletRechargePage from './Pages/wallet/manualWalletReachege/Index';
import HappyStoriesPage from './Pages/happyStorie/Index';
import EditHappyStories from './Components/happyStories/editHappyStories/EditHappyStories';
import StoryDetails from './Components/happyStories/storyDetails/StoryDetails';
import CategoryPage from './Pages/blog/categoris/Index';
import EditBlogCategory from './Components/blog/editBlogCatgory/EditBlogCategory';
import AllPostPage from './Pages/blog/allPost/Index';
import Create from './Components/blog/allPost/create/Create';
import EditBlogPost from './Components/blog/allPost/editAllPost/EditBlogPost';
import MarketingNewsLatterPage from './Pages/marketing/newsLatter/Index';
import SetReferalCommissionPage from './Pages/referal/setReferalCommission/Index';
import ReferalUserPag from './Pages/referal/referalUser/Index';
import ReferalEarningPage from './Pages/referal/referalEarning/Index';
import WalletWithdrowPage from './Pages/referal/walletWithdrowRequest/Index';
import AllActiveTicketPage from './Pages/supportTicket/activeTicket/Index';
import SupportTickets from './Components/supportTicket/activeTicket/supportTickets/SupportTickets';
import MyTicketsPage from './Pages/supportTicket/myTickets/Index';
import Cupiditate from './Components/supportTicket/myTicket/cupidiatate/Cupidiatate';
import SolveTicketsPage from './Pages/supportTicket/solveTickets/Index';
import SolveTicketInner from './Components/supportTicket/solveTickets/solveTicketsInner/SolveTicketInner';
import SupportCategoryPage from './Pages/supportTicket/supportSetting/category/Index';
import PremiumPackagesPage from './Pages/premiumPackagesPage';
import EditPackageInfo from './Components/premiumPackages/EditPackageInfo/EditPackageInfo';
import PackagePaymentsPage from './Pages/packagePaymentsPage';
import PackagePaymentsInvoice from './Components/packagePayments/packagePamentsInvoice/PackagePaymentsInvoice';
import AddNewPackage from './Components/premiumPackages/addNewPackage/AddNewPackage';
import SmsTemplatesPage from './Pages/otpSystemPages/smsTemplatesPage';
import SetOtpPage from './Pages/otpSystemPages/setOtpPage';
import SendSmsPage from './Pages/otpSystemPages/sendSmsPage';
import UploadedFilesPage from './Pages/uploadedFiles';
import UploadNewFiles from './Components/uploadedFiles/uploadNewFiles/UploadNewFiles';
import ProfileSectionSPage from './Pages/members/profileSectionsPage';
import WebsiteSetupHeaderPage from './Pages/websiteSetup/WebsiteSetupHeaderPage/index.js';
import WebsiteSetupFooterPage from './Pages/websiteSetup/websiteSetupFooterPage';
import WebsiteSetupPagesPage from './Pages/websiteSetup/websiteSetupPagesPage';
import WebsiteSetupAddNewPage from './Components/websiteSetup/websiteSetupPages/WebsiteSetupAddNewPage';
import EditPages from './Components/websiteSetup/websiteSetupPages/EditPages';
import AppearancesPage from './Pages/websiteSetup/appearancesPage';
import DefaultAgentPage from './Pages/supportTicket/supportSetting/defaultAgent/Index';
import GeneralSettingsPage from './Pages/settings/generalSettings/Index';
import LanguagePage from './Pages/settings/language/Index';
import InnerLanguage from './Components/settings/language/innerLanguage/InnerLanguage';
import Edit from './Components/settings/language/edit/Edit';
import CurrencyPage from './Pages/settings/currency/Index';
import AllStaffsPage from './Pages/AllStaffsPage';
import StaffsEdit from './Components/allStaffs/staffsEdit/StaffsEdit';
import AddNewStaffs from './Components/allStaffs/addNewStaffs/AddNewStaffs';
import StaffRolesPage from './Pages/staffRolesPage';
import AddnewRole from './Components/staffRoles/addnewRole/AddnewRole';
import StaffRolesEdit from './Components/staffRoles/staffRolesEdit/StaffRolesEdit';
import ThirdPartySettingPage from './Pages/settings/thirdPartySetting';
import UpdatePage from './Pages/system/updatePage';
import ServerStatus from './Components/system/update/ServerStatus';
import ServerStatusPage from './Pages/system/serverStatusPage';
import AddonManagerPage from './Pages/addonManagerPage';
import UpdateAddon from './Components/addonManager/UpdateAddon';
import SmtpSettingsPage from './Pages/settings/smtpSettings/Index';
import PaymentMethordPage from './Pages/settings/paymentMethord/Index';
import EmailTempletPage from './Pages/settings/emailTemplates/Index';
import SocialMediaLogInPage from './Pages/settings/socialMediaLogIn/Index';
import PremiumMembersPage from './Pages/members/premiumMembersPage';
import AddNewReligionsAndCaste from './Components/members/profileAttribute/religionsAndCaste/AddNewReligionsAndCaste.js';
import AddNewCaste from './Components/members/profileAttribute/caste/AddNewCaste.js';
import LoginPage from './common/login/LoginPage.js';
import AddNewSubCaste from './Components/members/profileAttribute/subCaste/AddNewSubCaste.js';
import AddNewMemberLanguage from './Components/members/profileAttribute/memberLanguage/AddNewMemberLanguage.js';
import AddNewCountry from './Components/members/profileAttribute/country/AddNewCountry.js';
import AddNewState from './Components/members/profileAttribute/state/AddNewState.js';
import AddNewCity from './Components/members/profileAttribute/cities/AddNewCity.js';
import AddNewOnBehalfs from './Components/members/profileAttribute/onBehalf/AddNewOnBehalfs.js';
import AddNewFamilyStatus from './Components/members/profileAttribute/familyStatus/AddNewFamilyStatus.js';
import AddNewFamilyValues from './Components/members/profileAttribute/familyValues/AddNewFamilyValues.js';
import AddNewMaritalStatus from './Components/members/profileAttribute/maritalStatus/AddNewMaritalStatus.js';
import AddBlogCategory from './Components/blog/categoris/AddBlogCategory.js';
import AddLanguage from './Components/settings/language/addLanguage/AddLanguage.js';
import AddCurrency from './Components/currency/AddCurrency.js';


function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Navigate to="/login" />} />
        {/* <Route path='/' element={<Navigate to={'/admin'} />} /> */}

        <Route path='/admin' element={<AdminPage />}>
          <Route path='' element={<DashboardPage />} />
          <Route path='members' element={<FreeMembersPage />} />
          <Route path='premium-members' element={<PremiumMembersPage />} />
          <Route path='members/create' element={<AddNewMembersPage />} />
          <Route path='members/members-detail' element={<MembersDetail />} />
          <Route path='members/members-edit' element={<MembersProfilesEdit />} />
          <Route path='member-bulk-add/index' element={<BulkMemberAddPage />} />
          <Route path='deleted_members' element={<DeletedMembersPage />} />
          <Route path='reported-members/all' element={<ReportedMembersPage />} />
          <Route path='unapproved-profile-pictures' element={<UnApprovedProfilePicsPages />} />
          <Route path='religions' element={<ReligionsPage />} />
          <Route path='religions/edit/:id' element={<AddNewReligionsAndCaste />} />
          <Route path='castes' element={<CastePage />} />
          <Route path='castes/edit/:id' element={<AddNewCaste />} />
          <Route path='sub-castes' element={<SubCastepage />} />
          <Route path='sub-castes/edit/:id' element={<AddNewSubCaste />} />
          {/* <Route path='sub-castes/edit/:id' element={<EditSubCasteInfo />} /> */}
          <Route path='member-languages' element={<MemberLanguagePage />} />
          <Route path='member-languages/edit/:id' element={<AddNewMemberLanguage />} />
          <Route path='countries' element={<CountryPage />} />
          <Route path='countries/edit/:id' element={<AddNewCountry />} />
          <Route path='states' element={<StatePage />} />
          <Route path='states/edit/:id' element={<AddNewState />} />
          <Route path='cities' element={<CityPage />} />
          <Route path='cities/edit/:id' element={<AddNewCity />} />
          <Route path='on-behalf' element={<OnBehalfPage />} />
          <Route path='on-behalf/edit/:id' element={<AddNewOnBehalfs />} />
          <Route path='family-values' element={<FamilyValuesPage />} />
          <Route path='family-values/edit/:id' element={<AddNewFamilyValues />} />
          <Route path='family-status' element={<FamilyStatusPage />} />
          <Route path='family-status/edit/:id' element={<AddNewFamilyStatus />} />
          <Route path='marital-statuses' element={<MaritalStatusPage />} />
          <Route path='marital-statuses/edit/:id' element={<AddNewMaritalStatus />} />



          <Route path='wallet-transaction-history' element={<WalletTransitionHistoryPages />} />
          <Route path='manual-wallet-recharge-requests' element={<ManualWalletRechargePage />} />
          <Route path='happy-story' element={<HappyStoriesPage />} />
          <Route path='happy-story/create' element={<EditHappyStories />} />
          {/* <Route path='happy-story/edit-happy-stories' element={<EditHappyStories />} /> */}
          <Route path='happy-story/edit/:id' element={<EditHappyStories />} />
          <Route path='happy-story/story-details' element={<StoryDetails />} />
          <Route path='blog-category' element={<CategoryPage />} />
          <Route path='blog-category/edit/:id' element={<AddBlogCategory />} />
          <Route path='blog-all-Post' element={<AllPostPage />} />
          <Route path='blog-all-Post/create' element={<Create />} />
          <Route path='blog-all-Post/edit/:id' element={<Create />} />
          <Route path='newsletter' element={<MarketingNewsLatterPage />} />
          <Route path='set-referral-commission' element={<SetReferalCommissionPage />} />
          <Route path='referal/users' element={<ReferalUserPag />} />
          <Route path='referal/earnings' element={<ReferalEarningPage />} />
          <Route path='wallet-withdraw-requests' element={<WalletWithdrowPage />} />


          <Route path='packages' element={<PremiumPackagesPage />} />
          {/* <Route path='packages/editPackage' element={< EditPackageInfo />} /> */}
          <Route path='packages/edit/:id' element={< AddNewPackage />} />
          <Route path='packages/create' element={< AddNewPackage />} />
          <Route path='package-payments' element={< PackagePaymentsPage />} />
          <Route path='package-payments/invoice' element={< PackagePaymentsInvoice />} />
          <Route path='sms-templates' element={< SmsTemplatesPage />} />
          <Route path='otp-credentials-configuration' element={< SetOtpPage />} />
          <Route path='bulk-sms' element={< SendSmsPage />} />
          <Route path='uploaded-files' element={< UploadedFilesPage />} />
          <Route path='uploaded-files/create' element={< UploadNewFiles />} />
          <Route path='active-ticket' element={<AllActiveTicketPage />} />
          <Route path='active-ticket/support-tickets' element={<SupportTickets />} />
          <Route path='my-ticket' element={<MyTicketsPage />} />
          <Route path='my-ticket/cupiditate' element={<Cupiditate />} />
          <Route path='solved-ticket' element={<SolveTicketsPage />} />
          <Route path='solved-ticket/solved-ticket-inner' element={<SolveTicketInner />} />
          <Route path='support-categories' element={<SupportCategoryPage />} />
          <Route path='member-profile-sections' element={<ProfileSectionSPage />} />
          <Route path='website/header_settings' element={<WebsiteSetupHeaderPage />} />
          <Route path='website/footer_settings' element={<WebsiteSetupFooterPage />} />
          <Route path='website/custom-pages' element={<WebsiteSetupPagesPage />} />
          <Route path='website/custom-pages/edit/:id' element={<WebsiteSetupAddNewPage />} />
          <Route path='website/custom-pages/create' element={<WebsiteSetupAddNewPage />} />
          <Route path='website/custom-pages/edit' element={<EditPages />} />
          <Route path='website/appearances' element={<AppearancesPage />} />
          <Route path='default-ticket-assigned-agent' element={<DefaultAgentPage />} />
          <Route path='general-settings' element={<GeneralSettingsPage />} />
          <Route path='languages' element={<LanguagePage />} />
          <Route path='languages/edit/:id' element={<AddLanguage />} />
          <Route path='inner/languages' element={<InnerLanguage />} />
          {/* <Route path='languages/edit' element={<Edit />} /> */}
          <Route path='currencies' element={<CurrencyPage />} />
          <Route path='currencies/edit/:id' element={<AddCurrency />} />
          <Route path='third-party-settings' element={<ThirdPartySettingPage />} />
          <Route path='system/update' element={<UpdatePage />} />
          <Route path='system/update/server-status' element={<ServerStatus />} />
          <Route path='server-status' element={<ServerStatusPage />} />
          <Route path='addons' element={<AddonManagerPage />} />
          <Route path='addons/create' element={<UpdateAddon />} />
          <Route path='smtp-settings' element={<SmtpSettingsPage />} />
          <Route path='payment-methods-settings' element={<PaymentMethordPage />} />
          <Route path='email-templates' element={<EmailTempletPage />} />
          <Route path='social-media-login-settings' element={<SocialMediaLogInPage />} />

          <Route path='staffs' element={<AllStaffsPage />} />
          <Route path='staffs/Edit' element={<StaffsEdit />} />
          <Route path='staffs/create' element={<AddNewStaffs />} />
          <Route path='roles' element={<StaffRolesPage />} />
          <Route path='roles/create' element={<AddnewRole />} />
          <Route path='roles/Edit' element={<StaffRolesEdit />} />

        </Route>

      </Routes>
      <FooterComp />
    </div>
  );
}
export default App;

