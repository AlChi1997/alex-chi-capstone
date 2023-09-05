import close from "../../assets/close-24px.svg"
import "./EditModal.scss"
import { useState } from "react";
import axios from "axios";

const EditModal = ({firstname, lastname, email, phonenumber, user_id, interest1, interest2, interest3, interest4, interest5, onCancel} ) => {
    
    const [profileData, setProfileData] = useState({
        firstname: firstname,
        lastname: lastname,
        email: email,
        phonenumber: phonenumber,
        user_id: user_id
    });

    const [interestData, setInterestData] = useState({
        interest1: interest1,
        interest2: interest2,
        interest3: interest3,
        interest4: interest4,
        interest5: interest5,
        user_id: user_id
    });

    const handleProfileChange = (e) => {
        const {name, value} = e.target;
        setProfileData({
            ...profileData,
            [name]: value,
        });
        };

    const handleInterestChange = (e) => {
        const {name, value} = e.target;
        setInterestData({
            ...interestData,
            [name]: value,
        });
        };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const profileResponse = await axios.post('http://localhost:8080/profile/:id', profileData);
            console.log(profileResponse.data);
            alert("User updated successfully");
            
            const interestResponse = await axios.post('http://localhost:8080/interests/:id', interestData);
            onCancel();
            console.log(interestResponse.data);
            alert("User interests updated successfully");
            } catch (error){
        }
        };

    return(
        <div className="modal">
            <div className="modal__content">
                <div className="modal__close" onClick={onCancel}>
                    <img className="modal__img" src={close} alt=""/>
                </div>
                <h1 className="modal__header">Edit Profile</h1>
                <div className="modal__form">
                    <form action="" className="modal__form-box" onSubmit={handleSubmit}>
                        <div className="modal__form-container">
                            <label className="modal__form-label" htmlFor="">
                                First Name
                            </label>
                            <input 
                                className="modal__form-input"
                                name="firstname"
                                type="text" 
                                required
                                placeholder={firstname}
                                onChange={handleProfileChange}
                                value={profileData.firstname}
                                />
                            <label className="modal__form-label" htmlFor="">
                                Last Name
                                </label>
                            <input 
                                className="modal__form-input" 
                                type="text" 
                                name="lastname"
                                required
                                placeholder={lastname}
                                onChange={handleProfileChange}
                                value={profileData.lastname}
                                />
                            <label className="modal__form-label" htmlFor="">
                                Email
                                </label>
                            <input className="modal__form-input" 
                                type="text" 
                                name="email"
                                required
                                placeholder={email}
                                onChange={handleProfileChange}
                                value={profileData.email}
                                />
                            <label className="modal__form-label" htmlFor="">
                                Mobile
                                </label>
                            <input 
                                className="modal__form-input" 
                                type="text" 
                                name="phonenumber"
                                required
                                placeholder={phonenumber}
                                onChange={handleProfileChange}
                                value={profileData.phonenumber}
                                />
                            <label className="modal__form-label" htmlFor="">
                                Interests 1
                                </label>
                            <input 
                                className="modal__form-input" 
                                type="text"
                                name="interest1"
                                placeholder={interest1}
                                onChange={handleInterestChange}
                                value={interestData.interest1}
                                />
                            <label className="modal__form-label" htmlFor="">
                                Interests 2
                                </label>
                            <input 
                                className="modal__form-input" 
                                type="text"
                                name="interest2"
                                placeholder={interest2}
                                onChange={handleInterestChange}
                                value={interestData.interest2}
                                />
                            <label className="modal__form-label" htmlFor="">
                                Interests 3
                                </label>
                            <input 
                                className="modal__form-input" 
                                type="text"
                                name="interest3"
                                placeholder={interest3}
                                onChange={handleInterestChange}
                                value={interestData.interest3}
                                />
                            <label className="modal__form-label" htmlFor="">
                                Interests 4
                                </label>
                            <input 
                                className="modal__form-input" 
                                type="text"
                                name="interest4"
                                placeholder={interest4}
                                onChange={handleInterestChange}
                                value={interestData.interest4}
                                />
                            <label className="modal__form-label" htmlFor="">
                                Interests 5
                                </label>
                            <input 
                                className="modal__form-input" 
                                type="text"
                                name="interest5"
                                placeholder={interest5}
                                onChange={handleInterestChange}
                                value={interestData.interest5}
                                />
                            </div>
                        <div className="modal__form-btn">
                            <button className="modal__form-btn-cancel" onClick={onCancel}>Cancel</button>
                            <button type="submit" className="modal__form-btn-save">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

};

export default EditModal;