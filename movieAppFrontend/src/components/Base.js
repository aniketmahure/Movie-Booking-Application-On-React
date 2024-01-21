import CustomNavbar from "./CustomNavbar";

const Base = ({children}) =>{
    return (
        <div style={{backgroundImage:'url("https://multiqos.com/blogs/wp-content/uploads/2021/09/How-to-Develop-an-Online-Movie-Ticket-Booking-App-like-BookMyShow.jpg")',
        backgroundSize:'cover', backgroundRepeat:'no-repeat', height:800}}>
            <CustomNavbar/>
            <div>{children}</div>
        </div>
    );
}
export default Base;