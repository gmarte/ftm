import React, { useEffect, useState } from 'react';
import { ControlPointDuplicateRounded, Star, Delete } from '@material-ui/icons';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import useAuth from '../../hooks/useAuth';
import './children.css';

const CHILDS_URL = '/api/child/';

const Children = () => {
  const [children, setChildren] = useState([]);
  const { setAuth } = useAuth();
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    fetchChildren();
  }, []);

  const fetchChildren = async () => {
    try {
      const response = await axiosPrivate.get(CHILDS_URL);
      setChildren(response.data);
    } catch (error) {
      console.error('Error fetching children:', error);
    }
  };

  const handleNewChild = () => {
    // Logic for adding a new child
  };

  const handleDeleteChild = async (childId) => {
    try {
      await axiosPrivate.delete(`${CHILDS_URL}${childId}/`);
      fetchChildren();
    } catch (error) {
      console.error('Error deleting child:', error);
    }
  };

  return (
    <div className="ftm__child section__padding">
      <div className="ftm_child-container">
        <button
          className="newChildButton"
          onClick={handleNewChild}
        >
          <ControlPointDuplicateRounded /> New Child
        </button>
        <div className="ftm__child-content">
          <div className="child-grid">
            {children.map((child) => (
              <div key={child.id} className="child-card">
                <div className="child-card-header">
                  <h2>{child.name}</h2>
                  <button
                    className="deleteButton"
                    onClick={() => handleDeleteChild(child.id)}
                  >
                    <Delete />
                  </button>
                </div>
                <div className="child-card-points">
                  <span>Points:</span>
                  <Star color="primary" />
                  <p>{child.points}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Children;
