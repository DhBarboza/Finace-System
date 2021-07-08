import React, { useEffect, useState } from 'react';
import { Container,
        CustomTitle,
        Title, 
        ButtonSuccess, 
        ActionButton, 
        PreviousNextButton, 
        ButtonPrimary,
        Table, 
        TextDanger,
        TextSuccess } from '../../styles/custom_home';

export const Home = () => {

    const [val, setVal] = useState([]);

    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = currentDate.getMonth() + 1;
    console.log(`Ano: {year}, Mês {month}`)

    const [dataView, setDataView] = useState({
        year,
        month
    });

    const previous = async () => {
        if(dataView.month === 1) {
            setDataView({
                year: dataView.year - 1,
                month: 12
            });
        } else {
            setDataView({
                year: dataView.year,
                month: dataView.month - 1
            });
        }
    }

    const next = async () => {
        if(dataView.month === 12) {
            setDataView({
                year: dataView.year + 1,
                month: 1
            });
        } else {
            setDataView({
                year: dataView.year,
                month: dataView.month + 1
            });
        }
    }

    const listExtract = async e => {
        var values = [
            {
                "id": 1,
                "nome": "Água",
                "valor": 150,
                "tipo": 1,
                "situacao": "Pago"
            },
            {
                "id": 2,
                "nome": "Luz",
                "valor": 110,
                "tipo": 1,
                "situacao": "Pago"
            },
            {
                "id": 3,
                "nome": "Celular",
                "valor": 40,
                "tipo": 1,
                "situacao": "Pago"
            },
            {
                "id": 4,
                "nome": "Salário",
                "valor": 1100,
                "tipo": 2,
                "situacao": ""
            }
        ]
        setVal(values);
        console.log(val);
    }
    useEffect(() => {
        listExtract();
    },[]);

    return(
        <Container>
            <CustomTitle>
                <Title>Situação Finaceira:</Title>
                <ActionButton>
                    <ButtonSuccess>Cadastrar</ButtonSuccess>
                </ActionButton>
            </CustomTitle>
            
            <PreviousNextButton>
                <ButtonPrimary type="button" onClick={() => previous()}>Anterior</ButtonPrimary>
                <span>{`Mês ${dataView.month} | Ano: ${dataView.year}`}</span>
                <ButtonPrimary type="button" onClick={() => next()}>Próximo</ButtonPrimary>
            </PreviousNextButton>
            
            <Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Tipo</th>
                        <th>Situação</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {val.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.tipo === 1 ? <TextDanger>Pagamento</TextDanger> : <TextSuccess>Recebimento</TextSuccess>}</td>
                            <td>{item.situacao}</td>
                            <td>{item.valor}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td>Total</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>700</td>
                    </tr>
                </tfoot>
            </Table>
        </Container>
    );
}