.PHONY: serve, build, style

serve:
	NODE_ENV='development' npm run dev

build: clean
	npm run build

style:
	npm run test:lint

clean:
	rm -rf dist/*
