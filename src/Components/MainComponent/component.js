import './component.css'

const MainComponent = props => {
  const {obj, func} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = obj

  const onClickDelete = () => {
    func(id)
  }

  return (
    <li className="main">
      <p>{timeAccessed}</p>
      <div className="super">
        <div className="sub">
          <img src={logoUrl} alt="domain logo" className="image" />
          <p className="para">{title}</p>
          <p>{domainUrl}</p>
        </div>
        <button
          data-testid="delete"
          type="submit"
          className="button"
          onClick={onClickDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default MainComponent
