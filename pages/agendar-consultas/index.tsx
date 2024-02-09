import React from "react";

import {
  Container,
  Form,
  Label,
  LabelLeft,
  Input,
  Select,
  SubForm,
  TitleSubForm,
  TitleForm,
  Field,
  FieldInline,
  FormLine,
  TextSubForm,
  ButtonAdd,
  ScheduleInfo,
  InfoRow,
  Note,
  Confimation,
  Total,
  TotalText,
  ScheduleConfirm,
  ScheduleButton,
} from "./styles";

import Header from "../../src/Components/Header";

import AlertMessage from "../../src/Components/AlertMessage";

import { useForm, SubmitHandler } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import { ValidationError } from "yup";

import * as yup from "yup";



import api from "../../src/Api/regionsAPI";

import apiLocations from "../../src/Api/locationsAPI";

import apiPokemons from "../../src/Api/pokemonsAPI";

import apiDates from "../../src/Api/datesAPI";

import apiTimes from "../../src/Api/timesAPI";

import { useCallback, useEffect, useState, useMemo, FormEvent, FormEventHandler } from "react";

import { useRouter } from 'next/router';

import { AlertMessageProps } from "../../src/Components/AlertMessage";

import {
  IRegionsResponse,
  ILocationsResponse,
  IResults,
} from "../../src/Types/types";

interface regionListTypes {
  name: string;
  url: string;
}

function AgendarConsultas() {

  const router = useRouter();

  const [allRegions, setAllRegions] = useState<IRegionsResponse>({
    count: 0,
    next: "",
    previous: "",
    results: [],
  });

  const [locationList, setLocationList] = useState<ILocationsResponse>({
    id: "",
    locations: [],
  });

  const [allPokemons, setAllPokemons] = useState<IResults>({
    count: 0,
    results: [],
    next: "",
    previous: "",
  });

  const [dateList, setDateList] = useState<string[]>([]);

  const [timeList, setTimeList] = useState<string[]>([]);

  const [region, setRegion] = useState("");
  const [location, setLocation] = useState("");
  const [locationsURL, setLocationsURL] = useState("");

  const [pokemonsTeam, setPokemonsTeam] = useState<string[]>([""]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const pokemonsTeamReal = useMemo(
    () => pokemonsTeam.filter((pokemon) => pokemon !== ""),
    [pokemonsTeam]
  );
  const numeroPokemons = useMemo(
    () => pokemonsTeamReal.length,
    [pokemonsTeamReal]
  );
  const subtotal = useMemo(
    () => (70 * numeroPokemons).toFixed(2),
    [numeroPokemons]
  );
  const managingFee = useMemo(
    () => (Number(subtotal) * 0.03).toFixed(2),
    [subtotal]
  );
  const total = useMemo(
    () => (Number(subtotal) + Number(managingFee)).toFixed(2),
    [subtotal, managingFee]
  );

  type PageState = "form" | "success" | "fail";

  const mensagem="Seu agendamento para dia"+ {date}+", às "+{time}+" , para 0"+{numeroPokemons}+" pokémons foi realizado com sucesso!"

  type ScheduleSubmitForm = {
    nome: string;
    sobrenome: string;
    regiao: string;
    cidade: string;
    pokemons:string[];
    data: string;
    horario: string;
  };

  const schema = yup.object().shape({
    nome: yup.string().required("Nome é obrigatório"),
    sobrenome: yup.string().required("Sobrenome é obrigatório"),
    regiao: yup.string().required("É preciso selecionar uma região"),
    cidade: yup.string().required("É preciso selecionar uma cidade"),
    pokemons: yup.array().of(yup.string()).required('É preciso selecionar um pokemon').min(1, 'É preciso selecionar pelo menos um Pokémon').max(6, "O numero máximo de pokémons é 6"),
    data: yup.string().required("É preciso selecionar uma data"),
    horario: yup.string().required("É preciso selecionar um horário"),
  });

  const {
    control,
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });


  

  function addPokemonToTeam() {
    if (pokemonsTeam.length < 6) setPokemonsTeam((prev) => [...prev, ""]);
  }

  function changePokemonFromList(
    e: React.ChangeEvent<HTMLSelectElement>,
    index: number
  ) {
    setPokemonsTeam((prev) => {
      const updated = [...prev];
      updated[index] = e.target.value;
      return updated;
    });
  }

  const regionUpdate = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setLocationsURL(e.target.value);
    getLocationList(e.target.value);
  };

  const locationUpdate = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setLocation(e.target.value);
  };

  const dateUpdate = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setDate(e.target.value);
  };

  const timeUpdate = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setTime(e.target.value);
  };

  const getAllRegions = useCallback(async () => {
    try {
      const response = await api.get<IRegionsResponse>("");
      console.log("response", response.data);
      setAllRegions(response.data);
      console.log("regions", allRegions);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getLocationList = useCallback(async (url: string) => {
    try {
      console.log("LocationURL", url);
      const response = await apiLocations.get<ILocationsResponse>(`${url}`);
      console.log("response2", response.data);
      setLocationList(response.data);
      console.log("locations", locationList);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getAllRegions();
  }, [getAllRegions]);

  const getAllPokemons = useCallback(async () => {
    try {
      const maxPokemons = 251;
      const response = await apiPokemons.get<IResults>(
        `pokemon?offset=1&limit=${maxPokemons}`
      );
      console.log("response3", response.data);
      setAllPokemons(response.data);
      console.log("pokemons", allPokemons);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getAllPokemons();
  }, [getAllPokemons]);

  const getDateList = useCallback(async () => {
    try {
      const response = await apiDates.get<string[]>("");
      console.log("response", response.data);
      setDateList(response.data);
      console.log("dateList", dateList);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getDateList();
  }, [getDateList]);

  const getTimeList = useCallback(async () => {
    try {
      const response = await apiTimes.post<string[]>("", { date: "" });
      console.log("response", response.data);
      setTimeList(response.data);
      console.log("timeList", timeList);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getTimeList();
  }, [getTimeList]);

  

  

  const onSubmit = (e: FormEvent<HTMLFormElement>, feedback: AlertMessageProps['status']) => {
    e.preventDefault()
   

    router.push({
      pathname: '/agendar-consultas/status',
      query: {
        status:'success',
        title: 'Consulta Agendada',
        subtitle: `Seu agendamento para dia ${date}, às ${time}, para ${numeroPokemons}x pokémons foi realizado com sucesso!`
      },
    })
  }
 

  return (
    <>
    <Header title={"Agendar Consultas"} line={"Recupere seus pokémons em 5 segundos"}/>
    <Container>
      <TitleForm>Preencha o formulário para agendar sua consulta</TitleForm>
      <Form method="post" onSubmit={(e) => onSubmit(e, 'success')}>
        <SubForm>
          <FormLine>
            <Field>
              <Label>Nome</Label>

              <Input {...register('nome')} placeholder="Digite seu nome" />
            </Field>
            <Field>
              <Label>Sobrenome</Label>
              <Input {...register('sobrenome')} placeholder="Digite seu sobrenome" />
            </Field>
          </FormLine>

          <FormLine>
            <Field>
              <Label>Região</Label>
              <Select {...register('regiao')} onChange={regionUpdate}>
                <option value="">Selecione a região</option>

                {allRegions.results.map((region, index) => (
                  <option key={index} value={region.url}>
                    {region.name}
                  </option>
                ))}
              </Select>
            </Field>

            <Field>
              <Label>Cidade</Label>
              <Select {...register('cidade')} onChange={locationUpdate}>
                <option value="">Selecione a Cidade</option>

                {locationList.locations.map((location, index) => (
                  <option key={index} value={location.url}>
                    {location.name}
                  </option>
                ))}
              </Select>
            </Field>
          </FormLine>
        </SubForm>
        <SubForm>
          <TitleSubForm>Cadastre seu time</TitleSubForm>

          <TextSubForm>Atendemos até 06 pokémons por vez</TextSubForm>

          {pokemonsTeam.map((pokemon, index) => {
            return (
              <FieldInline key={"pokemonWrapper" + index}>
                <LabelLeft>{"Pokémon 0" + (index + 1)}</LabelLeft>

                <Select
                
                  defaultValue={pokemon}
                  onChange={(e) => changePokemonFromList(e, index)}
                >
                  <option value="">Selecione seu pokémon</option>
                  {allPokemons.results.map((pokemonFromList) => (
                    <option
                      value={pokemonFromList.name}
                      key={pokemonFromList.name}
                    >
                      {pokemonFromList.name}
                    </option>
                  ))}
                </Select>
              </FieldInline>
            );
          })}

          <ButtonAdd
            type="button"
            onClick={addPokemonToTeam}
            disabled={pokemonsTeam.length === 6}
          >
            Adicionar novo pokémon ao time...
          </ButtonAdd>
          <FormLine>
            <Field>
              <Label>Data para Atendimento</Label>
              <Select  {...register('data')} onChange={dateUpdate}>
                <option value="">Selecione a data</option>

                {dateList.map((date, index) => (
                  <option key={index} value={date}>
                    {date}
                  </option>
                ))}
              </Select>
            </Field>
            <Field>
              <Label>Horário de Atendimento</Label>
              <Select    {...register('horario')} onChange={timeUpdate}>
                <option value="">Selecione o horário</option>

                {timeList.map((time, index) => (
                  <option key={index} value={time}>
                    {time}
                  </option>
                ))}
              </Select>
            </Field>
          </FormLine>
        </SubForm>
        <ScheduleInfo>
          <InfoRow>Número de pokémons a serem atendidos:0{numeroPokemons}</InfoRow>
          <InfoRow>Atendimento unitário por pokémon:R$ 70.00</InfoRow>
          <InfoRow>Subtotal: R$ {subtotal}</InfoRow>
          <InfoRow>Taxa geracional*: {managingFee} </InfoRow>
        </ScheduleInfo>
        <Note>
          *adicionamos uma taxa de 3%, multiplicado pelo número da geração mais
          alta do time, com limite de até 30%
        </Note>
        <Confimation>
          <Total>
            <TotalText>Valor Total: R$ {total}</TotalText>
          </Total>
          <ScheduleConfirm>
            <ScheduleButton type="submit">Concluir Agendamento</ScheduleButton>
          </ScheduleConfirm>
        </Confimation>
      </Form>

      
    </Container>
    </>
  );
}

export default AgendarConsultas;
