import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import avatar from '../../assets/avatar.jpg';
import './Profile.scss';

const Profile = () => {

    const { id } = useParams();
    const [user, setUser] = useState({});
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState(0);
    const [email, setEmail] = useState("");
    const [math, setMath] = useState(0);
    const [science, setScience] = useState(0);
    const [language, setLanguage] = useState(0);
    const [interest1, setInterest1] = useState("");
    const [interest2, setInterest2] = useState("");
    const [interest3, setInterest3] = useState("");
    const [interest4, setInterest4] = useState("");
    const [interest5, setInterest5] = useState("");

    useEffect(() => {
        const getUser = async () => {
            try {
            const response = await axios.get(`http://localhost:8080/user/${id}`);
            if(response && response.data){
            setUser(response.data[0] || {});
            setFirstName(response.data[0].first_name || "");
            setLastName(response.data[0].last_name || "");
            setPhoneNumber(response.data[0].phone_number || 0);
            setEmail(response.data[0].email || "");
            console.log(response.data[0]);
        }}
            catch (error) {
            console.log("An error occured: ", error);
        }
    };
        getUser();
    }, []);

    useEffect(() => {
        const getEducation = async () => {
            try {
            const response = await axios.get(`http://localhost:8080/education/${id}`);
            if(response && response.data){
            setMath(response.data[0].Math || 0);
            setScience(response.data[0].Science || 0);
            setLanguage(response.data[0].Language || 0);
        }}
         catch (error) {
            console.log("An error occured: ", error);
        }
    };
        getEducation();
    }, []);

    const educationData =[
        {name: "Math", value: math},
        {name: "Science", value: science},
        {name: "Language", value: language},
    ];

    console.log(educationData);

    useEffect(() => {
        const getInterest = async () => {
            try {
            const response = await axios.get(`http://localhost:8080/interests/${id}`);
            if(response && response.data){
            setInterest1(response.data[0].Interest_1 || "");
            setInterest2(response.data[0].Interest_2 || "");
            setInterest3(response.data[0].Interest_3 || "");
            setInterest4(response.data[0].Interest_4 || "");
            setInterest5(response.data[0].Interest_5 || "");
            console.log(response.data[0]);
        }}
            catch (error) {
            console.log("An error occured: ", error);
        }
    };
        getInterest();
    }, []);

    const interestData = [
        interest1,
        interest2,
        interest3,
        interest4,
        interest5
    ].filter((interest) => interest !== "");   

    const getCareerSuggestions = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/careers/${id}`,
            {interests: interestData},
            {education: educationData
            });
            if(response && response.data){
                const careerSuggestions = response.data;
                console.log(careerSuggestions);
            }
        }
        catch (error) {
            console.log("An error occured: ", error);
        }
    };

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
        </text>
        );
    };

    return (
        <div className='profile'>
            <section className="profile__info">
                <div className="profile__info-box">
                    <h2 className="profile__info-title">My Profile</h2>
                    <div className="profile__info-container">
                        <h3 className='profile__info-name'>Name: {firstName} {lastName}</h3>
                        <p className='profile__info-email'>Email:{email}</p>
                        <p className='profile__info-phone'>Mobile:{phoneNumber}</p>
                        <div className='profile__interests'>
                            <h3 className='profile__interests-title'>My Interests</h3>
                            {interestData.map((interest, index) => (
                                <p className='profile__interests-details' key={index}>{interest} </p>
                            ))}
                        </div>
                    </div>
                    <div className="profile__info-avatar">
                        <img src={avatar} alt="" className='profile__info-img'/>
                    </div>
                </div>
            </section>
            <section className='profile__education'>
                <h2 className='profile__education-title'>Education Overview</h2>
                <div className="profile__education-piechart">
                    <PieChart width={300} height={250}>
                    <Pie
                        dataKey="value"
                        isAnimationActive={false}
                        data={educationData}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        fill="#8884d8"
                        label={renderCustomizedLabel}
                        labelLine={false}
                    >
                    {educationData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                    </Pie>
                    <Tooltip />
                    </PieChart>
                </div>
                <div>
                    <Link to={`/user/${id}/education`} className='profile__education-link'>
                        <p className='profile__education-details'>View Details</p>
                        </Link>
                </div>
            </section>
            <section className='profile__career'>
                <h2 className='profile__career-title'>My Careers</h2>
                <div>
                    <Link to={`/user/${id}/careers`} className='profile__career-link'>
                        <p className='profile__career-details'>View Details</p>
                        </Link>
                </div>
            </section>
        </div>
    )
}

export default Profile