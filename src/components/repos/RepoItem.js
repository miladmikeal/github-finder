import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({ repo }) => {
  return (
    <div className="card">
      <a rel="noopener noreferrer" href={repo.html_url} target="_blank">{repo.name}</a>
    </div>
  )
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
}

export default RepoItem;
