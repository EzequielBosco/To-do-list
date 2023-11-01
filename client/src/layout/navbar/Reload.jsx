function Reload({ link, id }) {
  const reloadLink = id ? `/${id}` : link

  const handleClick = () => {
    setTimeout(() => {
      window.location.href = reloadLink
    }, 400)
  }

  return (
    <a onClick={handleClick}>
      <div className="logo" id="reload">
        <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 0 32 32"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M29 16c0 6-5 13-13 13S3 22 3 16S8 3 16 3c5 0 9 3 11 6m-7 1l7-1l1-7"/></svg>      
      </div>
    </a>
  )
}

export default Reload