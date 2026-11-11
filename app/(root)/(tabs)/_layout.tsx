import { useAuth } from '@clerk/expo';
import { Redirect, Slot } from 'expo-router';
import React from 'react';

const RootGroupLayout = () => {
    const { isLoaded, isSignedIn } = useAuth();

    if (!isLoaded) {
        return null;
    }

    if (isSignedIn) {
        return <Redirect href="/sign-in" />
    }

    return (
        <Slot />
    )
}

export default RootGroupLayout;