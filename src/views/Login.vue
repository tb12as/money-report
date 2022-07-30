<template>
	<div class="h-96 grid">
		<vs-row justify="center" align="center">
			<vs-col xs="12" md="6" w="4">
				<div class="bg-white p-3 rounded shadow-lg">
					<div class="content p-3">
						<h1 class="text-xl pb-6">Login</h1>

						<form @submit.prevent="login()">
							<div class="w-full">
								<vs-input
									class="mb-4"
									v-model="form.username"
									placeholder="Username"
								/>

								<vs-input
									class="mb-4"
									type="password"
									v-model="form.password"
									placeholder="Password"
								/>

								<vs-button
									type="border"
									@click.prevent="login()"
									color="primary"
									>Login</vs-button
								>
							</div>
						</form>
					</div>
				</div>
			</vs-col>
		</vs-row>
	</div>
</template>

<script>
export default {
	data() {
		return {
			form: {},
		};
	},

	methods: {
		login() {
			///
		},
	},
};
</script>
