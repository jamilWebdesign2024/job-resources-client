import React from 'react';
import { Link, useParams } from 'react-router';
import UseAuth from '../../Hooks/UseAuth';
import axios from 'axios';
import Swal from 'sweetalert2';
// import axios from 'axios';

const JobApply = () => {

    const { id: jobId } = useParams();
    const { user } = UseAuth();
    console.log(jobId, user);

    const handleApplyFormSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const linkdIn = form.linkdIn.value;
        const github = form.github.value;
        const resume = form.resume.value;
        console.log(linkdIn, github, resume);

        const application = {
            jobId,
            applicant: user.email,
            linkdIn,
            github,
            resume
        }

        axios.post('http://localhost:3000/applications', application)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "your Application has been submitted",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

            })
            .catch(error => {
                console.log(error);

            })

    }


    return (
        <div>
            <h3 className='text-4xl'>Apply for this job: <Link to={`/jobs/${jobId}`}>Details</Link></h3>

            <form onSubmit={handleApplyFormSubmit}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <label className="label">LinkdIn Link</label>
                    <input type="url" name='linkdIn' className="input" placeholder="linkedin profile link" />

                    <label className="label">Github LInk</label>
                    <input type="url" name='github' className="input" placeholder="Github Link" />

                    <label className="label">Resume Link</label>
                    <input type="url" name='resume' className="input" placeholder="resume link" />


                    <input type="submit" className='btn btn-secondary' value="Apply" />
                </fieldset>
            </form>
        </div>
    );
};

export default JobApply;