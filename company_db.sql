--
-- PostgreSQL database dump
--

-- Dumped from database version 14.4 (Debian 14.4-1.pgdg110+1)
-- Dumped by pg_dump version 14.4 (Debian 14.4-1.pgdg110+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: company_list; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.company_list (
    cin character(21) NOT NULL,
    name text NOT NULL,
    CONSTRAINT company_list_cin_check CHECK ((char_length(cin) = 21))
);


ALTER TABLE public.company_list OWNER TO postgres;

--
-- Data for Name: company_list; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.company_list (cin, name) FROM stdin;
L29130MH1961PLC012028	ABC BEARINGS LIMITED
U72900KL2020PTC064833	ZOURCELAB PRIVATE LIMITED
L27110UP1988PLC009780	HINDUS
U52100KA2013PLC069122	RELON LIMITED
\.


--
-- Name: company_list company_list_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.company_list
    ADD CONSTRAINT company_list_pkey PRIMARY KEY (cin);


--
-- PostgreSQL database dump complete
--

