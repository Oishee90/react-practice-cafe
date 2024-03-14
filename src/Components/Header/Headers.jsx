import profile from '../../assets/images/profile.png'
const Headers = () => {
    return (
        <div className='flex justify-between items-center p-4 mx-4 border-b-2  mx-auto max-w-7xl'>
              <h1 className='text-4xl font-bold'>Knowladge cafe</h1>
              <img src={profile} alt="" />
        </div>
    );
};

export default Headers;