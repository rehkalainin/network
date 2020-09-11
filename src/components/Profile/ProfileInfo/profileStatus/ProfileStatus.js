import React from 'react'

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  }
  activeStatus = () => {
    this.setState({ editMode: true })
  }
  diactiveStatus = () => {
    this.setState({ editMode: false })
    this.props.updateStatus(this.state.status)
  }
  changeStatus = (e) => {
    this.setState({ status: e.currentTarget.value })
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.status != this.props.status) {
      this.setState({
        status: this.props.status,
      })
    }
  }

  render() {
    return (
      <div>
        {!this.state.editMode ? (
          <div>
            <span onDoubleClick={this.activeStatus}>
              Status : {this.state.status || 'Absent status'}
            </span>
          </div>
        ) : (
          <div>
            <input
              onChange={(e) => {
                this.changeStatus(e)
              }}
              autoFocus={true}
              onBlur={this.diactiveStatus}
              value={this.state.status}
            />
          </div>
        )}
      </div>
    )
  }
}

export default ProfileStatus
