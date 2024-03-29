import React, { Component } from 'react';

import {Link} from 'react-router-dom';
import CategoryItem from './category/CategoryItem';
class Category extends Component {
    render() {
        return (
           
            <div className="container">
            <Link to="/addCategory" className="btn btn-primary mb-3">
              <i className="fas fa-plus-circle"> Thêm danh mục mới</i>
            </Link>
            <br />
            <hr />
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="card text-center mb-2">
                    <div className="card-header bg-secondary text-white">
                      <h3>TO DO</h3>
                    </div>
                  </div>
                  <CategoryItem></CategoryItem>
                </div>
                <div className="col-md-4">
                  <div className="card text-center mb-2">
                    <div className="card-header bg-primary text-white">
                      <h3>In Progress</h3>
                    </div>
                  </div>
                  <CategoryItem></CategoryItem>
                </div>
                <div className="col-md-4">
                  <div className="card text-center mb-2">
                    <div className="card-header bg-success text-white">
                      <h3>Done</h3>
                    </div>
                  </div>
                  <CategoryItem></CategoryItem>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Category;