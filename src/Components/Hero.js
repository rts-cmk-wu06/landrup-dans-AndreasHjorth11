const Hero = (props) => {
    return ( 
        <div className="h-[800px]">
            <img src={`Assets/${props.image}`} className="h-full object-cover" />
        </div>
     );
}
 
export default Hero;