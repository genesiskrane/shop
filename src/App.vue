<template>
	<div>
		<p>
			App Name: Loading... <br />
			{{ hostname }}
		</p>
	</div>
</template>

<script setup>
const hostname = window.location.hostname;
</script>
