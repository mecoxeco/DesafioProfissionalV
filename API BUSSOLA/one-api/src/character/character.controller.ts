import { Controller, Get, Post, Body, Param, Delete } from 'nestjs/common';
import { CharacterService } from './character.service';
import { CreateCharacterDto } from './dto/create-character.dto';
// import { UpdateCharacterDto } from './dto/update-character.dto';

@Controller('character')
export class CharacterController {
    constructor(private readonly characterService: CharacterService) { }

    @Post
    create(@Body() createCharacterDto: CreateCharacterDto) {
        return this.CharacterService.create(createCharacterDto);
    }

    @Get()
    findAll() {
        return this.CharacterService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: int) {
        return this.CharacterService.findById(id);
    }

    // @Patch(':id')
    // update(@Param('id') id: int, @Body() updateCharacterDto: UpdateCharacterDto) {
    //     return this.CharacterService.update(id, updateCharacterDto);
    // }

    @Delete(':id')
    remove(@Param('id') id: int) {
        return this.CharacterService.remove(id);
    }
}