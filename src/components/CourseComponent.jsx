import React from 'react'

import CourseSF from '../assets/CourseSF.png'
import { course } from '../data/index'

const CourseComponent = () => {
  return (
    <div>
        <div className="row position-relative py-5">
            <div className="col d-flex flex-wrap justify-content-center">
                <div className="card-fitur">
                    <img src={CourseSF} alt="" />
                </div>
                {course.map((course) => {
                return(
                    <div key={course.id} className="card-fitur position-relative">
                            <img src={course.image} alt="" />
                        <div className="overlay position-absolute top-0 bottom-0 start-0 end-0 h-100 w-100">
                            <button className="btn-course-home position-absolute bottom-0 start-50 translate-middle">
                                <a href="/payment">{course.desc}<br /><span>{course.title}</span></a>
                            </button>
                        </div>
                    </div>
                    )})
                }
            </div>
        </div>
    </div>
  )
}

export default CourseComponent