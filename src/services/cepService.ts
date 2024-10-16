export interface Address {
  street: string;
  neighborhood: string;
  city: string;
  state: string;
}

export const fetchAddressByCep = async (
  cep: string
): Promise<Address | null> => {
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();

    if (data.erro) {
      throw new Error("CEP inválido");
    }

    return {
      street: data.logradouro,
      neighborhood: data.bairro,
      city: data.localidade,
      state: data.uf,
    };
  } catch (error) {
    console.error("Erro ao buscar o endereço:", error);
    return null;
  }
};
