import {IoIosArrowDown} from 'react-icons/io'
import {FaRupeeSign} from 'react-icons/fa'
import {BsFillPersonCheckFill} from 'react-icons/bs'
import {FcApproval, FcCheckmark} from 'react-icons/fc'
import Header from '../Header'
import './index.css'

const Profile = () => (
  <>
    <Header activeTabId="Profile" />
    <div className="profile-container">
      <div className="name-edit">
        <h1 className="name">
          <BsFillPersonCheckFill size="25" color="#37CB28" /> ANAND REDDY
        </h1>

        <button type="button" className="edit-button">
          EDIT
        </button>
      </div>
      <p className="profile-desc">9898989898 . anandreddy@gmail.com</p>
      <hr className="profile-line" />

      <div className="profile-section">
        <div className="acc-main">
          <h1 className="profile-head">My Account</h1>
          <IoIosArrowDown color="#909090" />
        </div>
        <p className="profile-desc">
          Address, streets, Building, Order place...
        </p>
      </div>
      <hr className="underline" />

      <div className="profile-section">
        <div className="acc-main">
          <h1 className="profile-head">Payments & Refunds</h1>
          <IoIosArrowDown color="#909090" />
        </div>
        <p className="profile-desc">
          UPI, Phone pay, Paytm, Refunds & Payment Modes...
        </p>
      </div>
      <hr className="underline" />

      <div className="profile-section">
        <div className="acc-main">
          <h1 className="profile-head">
            <FcApproval /> PRO membership
          </h1>
        </div>
        <p className="profile-desc">
          Get Unlimited Free Delivery & Extra Discounts with Tasty Kitchens PRO.
          Buy @299 for 2 month.
        </p>
      </div>
      <hr className="underline" />

      <h1 className="profile-head"> PAST ORDERS </h1>

      <div className="item-delivery">
        <h1 className="profile-head">Cream Stone</h1>
        <p className="profile-desc">
          Delivered <FcCheckmark />
        </p>
      </div>
      <p>Hyderabad, Ameerpet</p>
      <p className="profile-desc">
        <FaRupeeSign /> 307
      </p>
    </div>
  </>
)
export default Profile
