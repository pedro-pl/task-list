import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #2b2d42;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Title = styled.p`
    color: #f3f3f3;
    font-size: 2.5rem;
    font-weight: 600;
    margin: 2rem 0;

    @media (min-width: 870px) {
        font-size: 3rem;
    }
`

export const ContainerTasks = styled.div`
    width: 85%;
    min-height: 70%;
    background-color: #4a4e69;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    transition: 0.3s;

    @media (min-width: 690px) {
        width: 40rem;
    }
`

export const ContainerInput = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-between;
`

export const Input = styled.input`
    width: 75%;
    height: 3rem;
    border-radius: 5px;
    border: none;
    outline: none;
    font-size: 1.5rem;
    padding: 0 10px;
    color: #212529;
    transition: 0.3s;

    @media (min-width: 425px) {
        width: 77%;
        height: 3.5rem;
        transition: 0.3s;
    }

    @media (min-width: 540px) {
        width: 83%;
        transition: 0.3s;
    }
    
    @media (min-width: 700px) {
        width: 85%;
        height: 4rem;
        font-size: 1.7rem;
        transition: 0.3s;
    }
`

export const ButtonAdd = styled.button`
    width: 3rem;
    height: 3rem;
    border: none;
    border-radius: 5px;
    outline: none;
    background-color: #52b788;
    font-size: 2rem;
    color: #fff;
    font-weight: 600;
    transition: 0.3s;
    cursor: pointer;

    &:hover{
        transition: 0.3s;
        background-color: #40916c;
    }

    @media (min-width: 420px) {
        width: 3.5rem;
        height: 3.5rem;
        transition: 0.3s;
    }

    @media (min-width: 700px) {
        height: 4rem;
        width: 4rem;
        font-size: 2.5rem;
        transition: 0.3s;
    }
`

export const ContainerCards = styled.div`
    width: 100%;
    height: 30rem;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    overflow: hidden;
    overflow-y: scroll;
    transition: 0.3s;

    &::-webkit-scrollbar {
        border-radius: 20px;
        display: none;
    }

    @media (min-width: 1380px) {
        height: 35rem;
        transition: 0.3s;
    }

    @media (max-height: 739px) {
        height: 25rem;
    }

    @media (min-height: 820px) {
        height: 37rem;
    }
`

export const CardTask = styled.div`
    width: 100%;
    height: 3.5rem;
    background-color: #efefef;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 0.3s;

    svg{
        color: #ef233c;
        cursor: pointer;
        margin-right: 10px;
        user-select: none;
    }
`

export const LabelTask = styled.p`
    font-size: 1.2rem;
    font-weight: 400;
    color: #343a40;
    padding: 10px;
    margin: 0;
`