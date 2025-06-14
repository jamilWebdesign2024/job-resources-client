import React, { Suspense } from 'react';
import ApplicationsState from './ApplicationsState';
import ApplicationList from './ApplicationList';
import UseAuth from '../../Hooks/UseAuth';
import { myApplicationsPromise } from '../../api/applicationsApi';


const MyApplications = () => {

    const {user} = UseAuth();

    console.log('token firebase token', user.accessToken);
    

    return (
        <div>
            <ApplicationsState></ApplicationsState>
            <Suspense fallback={'loading your applications'}> 
                <ApplicationList
                myApplicationsPromise={myApplicationsPromise(user.email, user.accessToken)}
                ></ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplications;