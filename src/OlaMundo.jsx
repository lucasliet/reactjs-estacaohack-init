import React from 'react';

export default function OlaMundo() {
    const world = 'Mundo';
    return (
        <h1>Olá {`{${world}}`}!</h1>
    )
}