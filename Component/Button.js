import { MDBIcon, MDBBtn } from "mdbreact";

const ButtonMore = () => {
  const BtnMore = "See More";
  return (
    <div className='text-center'>
      <MDBBtn className='see-more' outline color='primary' type='submit reset'>
        {BtnMore}
        <MDBIcon far icon='paper-plane' className='ml-1' />
      </MDBBtn>
    </div>
  );
};

export default ButtonMore;
