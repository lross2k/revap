export default function mainFrame() {
    return(
        <>
        def gen_main_frame(self) - tuple[customtkinter.CTkFrame, customtkinter.CTkFrame, setCustomtkinter]:
        main_frame = customtkinter.CTkFrame(self.TKroot)
        #customtkinter.CTkLabel(main_frame, text='Main Page').grid(row=0, column=0)
        customtkinter.CTkButton(main_frame, text='Cambiar parametros', command=self.raise_input_menu).grid(row=1, column=1)
        #main_frame.rowconfigure(0, weight=1)
        #main_frame.rowconfigure(1, weight=1)
        #main_frame.columnconfigure(0, weight=1)
        customtkinter.CTkButton(main_frame, text='Seleccionar datos', command=self.get_test_data).grid(row=2, column=1, columnspan=1)
        customtkinter.CTkButton(main_frame, text='Calcular', command=self.run_scenario_example).grid(row=3, column=1, columnspan=1)
        result_frame = customtkinter.CTkScrollableFrame(main_frame, width=800, height=500, orientation='horizontal')
        result_frame.grid(row=4, column=0, columnspan=3)
        return main_frame, result_frame
        </>
    );
}
